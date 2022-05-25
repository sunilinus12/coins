import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, Dimensions } from 'react-native';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
export default function Home({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('https://comms.globalxchange.com/coin/vault/get/all/coins')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);


    return (

        <View style={{ flex: 1, padding: 24, backgroundColor: "white" }}>
            {isLoading ? <Text>Loading...</Text> :
                (<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                    <View style={{flex:0.2,alignItems:"center"}}>
                            <Text style={{fontWeight:'900',fontSize:40,color:"black"}}>$2,564.25</Text>
                            <Text style={{marginTop:"2%", }} >Updated <Text style={{color:'black'}}>25.05.2022 | 6:24</Text></Text>
                    </View>

                    <FlatList
                    style={{flex:1}}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}

                        data={data.coins}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <>

                                <TouchableWithoutFeedback onPress={() => { navigation.push("Detailed", item); }}
                                    style={{ marginBottom:10 }}
                                >

                                    <View style={{
                                        flex: 1, flexDirection: "row", margin: 10, backgroundColor: "white", padding: "5%", borderRadius: 10,
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 10,
                                        },
                                        shadowOpacity: 0.51,
                                        shadowRadius: 13.16,

                                        elevation: 10,
                                    }}>
                                        <View style={{ flex: 0.2 }}>
                                            <Image
                                                style={{ width: "100%", height: 5 / 100 * Dimensions.get("screen").height }}
                                                resizeMode="contain"
                                                source={{ uri: item.coinImage }}

                                            />
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between', margin: 2 }}>

                                                <Text style={{ color: "black" }}>{item.coinName}</Text>
                                                <Text style={{ color: "black" }}>{item.symbol + " " + item.usd_price}</Text>
                                            </View>
                                            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between', margin: 2 }}>
                                                <Text style={{ color: "gray" }}>{item.coinSymbol}</Text>
                                                <Text style={{ color: "green" }}>{item._24hrchange}</Text>
                                            </View>

                                        </View>

                                    </View>
                                </TouchableWithoutFeedback>
                            </>
                        )}
                    />
                </View>
                )}
        </View>
    );
};