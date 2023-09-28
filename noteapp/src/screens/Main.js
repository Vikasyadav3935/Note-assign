import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addNote, deleteNote} from '../slices/noteSlice';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Main = ({route,navigation}) => {
  const {category}=route.params;
  const data = useSelector(state => state.notes);
 

  
 
  const dispatch = useDispatch();
  return (
    <View style={{height: '100%', width: '100%', backgroundColor: '#1aa'}}>
       <Text style={{alignSelf:'center',margin:20,color:'white',fontSize:20}}>{category}</Text>
      <View style={{}}>
        <FlatList
          data={data.filter(el=>el.category==category)}
          renderItem={({item}) => (
            <View style={styles.view}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('NoteDetail', {
                    id: item.id,
                    text: item.text,
                  })
                }
                style={{width: '70%'}}>
                <Text style={{color: 'black'}}>{item.text}</Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  width: '30%',
                }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('EditNote', {
                      id: item.id,
                      text: item.text,
                      category:item.category,
                    })
                  }>
                  <AntDesign name="edit" size={20} color="#000" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => dispatch(deleteNote(item.id))}>
                  <AntDesign name="delete" size={20} color="#000" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>

      <View style={styles.addButton}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('AddNote')}>
          <AntDesign name="plus" size={60}  color="#fff" />
        </TouchableOpacity>
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
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
  btn: {},
  view: {
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    width: '95%',
    alignSelf: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    borderRadius: 5,
    alignItems: 'center',
    padding: 4,
    backgroundColor: 'white',
    elevation: 5,
  },
});

export default Main;
