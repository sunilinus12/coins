import { View, Text ,Image} from 'react-native'
import React from 'react'

export default function Left_header() {
  return (
    <View style={{flexDirection: 'row'}}>
    <Image
    
      source={{
        uri:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgYJO6JuvuYEk7SfsJNn-VRWoD72fGY35rzg&usqp=CAU',
      }}
      style={{
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        marginLeft: 15,
        
      }}
    />
  </View>
  )
}