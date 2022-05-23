import { View, Text } from 'react-native'
import React from 'react'
import Home from './screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import Stack_nav from './navigation/Stack_nav';

export default function App() {
  return (
    <NavigationContainer>
      <Stack_nav/>
    </NavigationContainer>
  )
}