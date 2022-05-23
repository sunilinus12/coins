import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Detailed from '../screens/Detailed';
import Home from '../screens/Home';


const Stack = createStackNavigator();

export default function Stack_nav() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Detailed" component={Detailed} />
   
  </Stack.Navigator>
  )
}