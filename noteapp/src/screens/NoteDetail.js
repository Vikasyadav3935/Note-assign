import { View, Text } from 'react-native'
import React from 'react'

const NoteDetail = ({route,navigation}) => {
    const {id,text}=route.params;
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#af27'}}>
      <Text style={{color:'black',fontSize:20,fontWeight:'600',marginHorizontal:30}}>{text}</Text>
    </View>
  )
}

export default NoteDetail