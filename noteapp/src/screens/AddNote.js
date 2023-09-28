import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addNote} from '../slices/noteSlice';

const AddNote = ({navigation}) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const [category,setCategory]=useState('');
  const data = useSelector(state => state.notes);
  //    console.log(data,'data');
  const handleAddNote = () => {
    if (text.trim() !== '' && category.trim() !== '' ) {
      dispatch(addNote({id: Date.now(), text,category}));
      setText('');
      navigation.goBack();
    }
  };
  return (
    <View style={{height: '100%', width: '100%', backgroundColor: '#3afa'}}>
      <View style={styles.container}>
        <TextInput
          style={[styles.input, {paddingHorizontal: 10}]}
          placeholder="Category"
          value={category}
          onChangeText ={setCategory}
        />
      </View>

      <View style={styles.container}>
        <TextInput
          multiline
          numberOfLines={6}
          placeholder="Enter your note"
          value={text}
          onChangeText={setText}
          style={styles.input}
        />
      </View>
      <View style={styles.addButton}>
        <TouchableOpacity style={styles.btn} onPress={handleAddNote}>
          <Text style={{fontSize: 30, color: 'white'}}>Save Note</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addButton: {
    height: 80,

    top: '85%',
    left: '55%',
    position: 'absolute',
  },
  btn: {
    backgroundColor: '#aca',
    width: 160,
    paddingHorizontal: 10,
    borderRadius: 15,
    elevation: 6,
    paddingVertical: 5,
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
    borderWidth: 0.5,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
});

export default AddNote;
