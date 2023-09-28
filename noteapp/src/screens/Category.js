import { View, Text,FlatList,TouchableOpacity,StyleSheet,TextInput } from 'react-native'
import React,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import debounce from 'lodash.debounce';

const Category = ({navigation}) => {
  const data = useSelector(state => state.notes);
  const uniqueCategories = new Set();
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [tru,settru]=useState(false);

// Use filter to iterate through the array and keep only the first occurrence of each category
const uniqueArray = data.filter(obj => {
  if (!uniqueCategories.has(obj.category)) {
    uniqueCategories.add(obj.category);
    return true; // Include the first occurrence of the category
  }
  return false; // Skip duplicates
});

const debouncedSearch = debounce(text => {
  const filtered = data.filter(item =>
    item.text.toLowerCase().includes(text.toLowerCase())
  );
  setFilteredData(filtered);
}, 300); // Adjust the debounce delay as needed

const handleSearch = text => {
  setSearchText(text);
  debouncedSearch(text);
};


// console.log(uniqueArray[0].text,'hdhd');
// console.log(data,'dat')
  return (
    <View style={{height: '100%', width: '100%', backgroundColor: '#1aa'}}>
      <View>
      <TextInput
       onFocus={()=>settru(true)}
       onBlur={()=>settru(false)}
        style={styles.input}
        placeholder="Search by text"
        onChangeText={handleSearch}
        value={searchText}
      />
     { <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>navigation.navigate('NoteDetail', {
            id: item.id,
            text: item.text,
          })} style={styles.gridItem}>
            <Text>{item.text}</Text>
          </TouchableOpacity>
        )}
      /> }
      </View>
      { data.length==0?<Text style={{margin:20,}}>Write your first note</Text>:<FlatList  
       data={uniqueArray}
       numColumns={2}
       renderItem={({item})=>
      <View style={{ width:'50%',margin:10}}>
     <TouchableOpacity style={{width:'50%',marginHorizontal:20}} onPress={()=>navigation.navigate('Note App',{category:item.category})}>
      <AntDesign  name='folder1' size={50} color='#fff' />
      
     </TouchableOpacity>
     <Text style={{marginHorizontal:25,fontSize:20,color:'white'}}>{item.category}</Text>
      </View>
    
      }
      keyExtractor={el=>el.id}
      />}
       <View style={styles.addButton}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('AddNote')}>
          <AntDesign name="plus" size={60}  color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
  addButton: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    top: '85%',
    left: '75%',
    position: 'absolute',
    backgroundColor: '#a1f',
    borderRadius: 10,
    elevation: 7,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
    paddingLeft: 8,
  },
  gridItem: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: 'lightgray',
  },
})

export default Category;