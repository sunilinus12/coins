import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Right_header() {
    return (
        <View style={{
            flexDirection: 'row', marginRight: 10, position:'relative'
        }}>
            <Icon name="bell" size={25} color="#e0e0e0" />
            <View style={{
                backgroundColor: "#18ce3d", borderRadius: 8, width: 13, height: 13, justifyContent: "center", alignItems: "center",
                position:'absolute',right:0,top:1.5

            }}>
                <Text style={{ color: "white", fontSize: 8 }}>2</Text>
            </View>
        </View>
    )
}