import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Image } from 'react-native';
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

        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? <Text>Loading...</Text> :
                (<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>

                    <FlatList
                        data={data.coins}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <>

                                <TouchableWithoutFeedback onPress={() => { navigation.push("Detailed", item); console.log("working") }} >

                                    <View style={{ flex: 1, flexDirection:"row", margin: 10, backgroundColor: "black", padding: 5 }}>
                                        <View style={{flex:0.2}}>
                                            <Image
                                                style={{ width: "100%", height: 50 }}
                                                resizeMode="contain"
                                                source={{ uri: item.coinImage }}

                                            />
                                        </View>
                                        <View style={{flex:1}}>
                                            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between', margin: 2 }}>

                                                <Text style={{ color: "white" }}>{item.coinName}</Text>
                                                <Text style={{ color: "white" }}>{item.symbol + " " + item.usd_price}</Text>
                                            </View>
                                            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between', margin: 2 }}>
                                                <Text style={{ color: "white" }}>{item.coinSymbol}</Text>
                                                <Text style={{ color: "white" }}>{item._24hrchange}</Text>
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