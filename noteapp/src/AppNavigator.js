import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Main from './screens/Main'
import AddNote from './screens/AddNote'
import EditNote from './screens/EditNote'
import NoteDetail from './screens/NoteDetail'
import Category from './screens/Category'

const AppNavigator = () => {
    const Stack =createStackNavigator()
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='Category' component={Category}    />
    <Stack.Screen name='Note App' component={Main}  options={{headerShown:false}}  />
    <Stack.Screen name='AddNote' component={AddNote}   />
    <Stack.Screen name='EditNote' component={EditNote}   />
    <Stack.Screen name='NoteDetail' component={NoteDetail}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator