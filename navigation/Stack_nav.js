import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Detailed from '../screens/Detailed';
import Home from '../screens/Home';
import Left_header from '../screens/components/Left_header';
import Right_header from '../screens/components/Right_header';


const Stack = createStackNavigator();

export default function Stack_nav() {
  return (
    <Stack.Navigator
     ScreenOptions={{
      headerTitleAlign:"center",
     }}
    >
      <Stack.Screen name="My balance" component={Home}
        options={{
          
          headerStyle: {
            backgroundColor: 'white',
            
          },
          headerTintColor: 'black',
         
          headerLeft: () => <Left_header />,
          headerTitleAlign:"center",
          headerRight:()=><Right_header/>

          
        }}
      />
      <Stack.Screen name="Detailed" component={Detailed}
      options={{
        headerRight:()=><Right_header/>,
        headerTitleAlign:"center",
       
      }}
      
       />


    </Stack.Navigator>
  )
}