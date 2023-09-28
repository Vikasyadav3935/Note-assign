import { View, Text, TouchableOpacity,StyleSheet,TextInput } from 'react-native'
import React,{useState} from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { editNote } from '../slices/noteSlice';

const EditNote=({ route, navigation })=> {
    const { id, text, category } = route.params;
    const [newText, setNewText] = useState(text);
    const [newcategory,newsetCategory]=useState(category);
    const dispatch = useDispatch();
  
    const handleEditNote = () => {
      if (newText.trim() !== '' && category.trim() !== '' ) {
        dispatch(editNote({ id, newText: newText, newCategory :newcategory }));
        navigation.goBack();
      }
    };
  return (
    <View style={{height:'100%',width:'100%',backgroundColor:'#3afa'}}> 
     <View style={styles.container}>
        <TextInput
          style={[styles.input, {paddingHorizontal: 10}]}
          placeholder="Category"
          value={newcategory}
          onChangeText={newsetCategory}
        />
      </View>
     <View style={styles.container}>
      <TextInput
        multiline
        numberOfLines={6}
        placeholder="Edit your note"
        value={newText}
        onChangeText={setNewText}
        style={styles.input}
       
        
      />
    </View>
    <View style={styles.addButton}>
        <TouchableOpacity style={styles.btn} onPress={handleEditNote} >
            <Text style={{fontSize:30,color:'white'}}>Save Note</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    addButton:{
        
        height:80,
       
        top:'85%',
        left:'55%',
        position:'absolute'
    },
    btn:{
       backgroundColor:'#aca',
       width:160,
       paddingHorizontal:10,
       borderRadius:15,
       elevation:6

    },
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
       
        borderRadius: 10,
      },
      input: {
        fontSize: 16,
        lineHeight: 24,
        minHeight: 50,
        borderWidth:.5,
        borderRadius:10,
        elevation:5,backgroundColor:'white'
      },
})

export default EditNote;