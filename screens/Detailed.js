import { View, Text } from 'react-native'
import React from 'react'

export default function Detailed({route}) {
    const ge = route.params;
    
  return (
    <View>
      <Text>hello {ge.coinName}</Text>
      
      <Text>hello {ge.usd_price}</Text>
      <Text>
          rest all data can be loaded here 
      </Text>
      
    </View>
  )
}