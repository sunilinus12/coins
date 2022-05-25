import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, Image,Dimensions } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Check from './Check';

export default function Detailed({ route }) {
  const ge = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const ge = route.params;
    const sym = ge.coinSymbol;
    fetch(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${sym}&tsym=USD&limit=10`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  return (


    <View style={{ flex: 1, padding: 24, backgroundColor: "white" }}>
      {isLoading ? <Text>Loading...</Text> :
        (<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
          <View style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}>
            <View style={{ width: 40, height: 40 }}>
              <Image
                style={{ width: "100%", height: 5 / 100 * Dimensions.get("screen").height }}
                resizeMode="contain"
                source={{ uri: ge.coinImage }}

              />
            </View>
            <Text style={{ fontSize: 30, color: "black", fontWeight: "900" }}>{ge.symbol} 6,532.00</Text>
            <Text>{ge.symbol}525 <Text style={{ color: "green" }}>| 15.20%</Text></Text>




          </View>
          <Check />
          <FlatList style={{ flex: 1 }}
            data={data.Data.Data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <>

                <View style={{ marginVertical: 4, borderBottomColor: "black", borderBottomWidth: 2 }}>
                  <Text style={{ fontWeight: "700" }}>  Data:</Text>
                  <Text>"time": {item.time},</Text>
                  <Text>"high": {item.high},</Text>
                  <Text>"low": {item.low},</Text>
                  <Text>"open": {item.open},</Text>
                  <Text>"volumefrom": {item.volumefrom},</Text>
                  <Text>"volumeto": {item.volumeto},</Text>
                  <Text>"close": {item.close},</Text>
                  <Text>"conversionType": {item.conversionType},</Text>
                </View>

              </>
            )}
          />
        </View>
        )}
    </View>
  )
}