import { View, Text,Dimensions } from 'react-native'
import React from 'react'
import {
    LineChart,
   
} from "react-native-chart-kit";
export default function Check() {
    return (
        <View>
            <View>
              
                <LineChart
                    data={{
                        labels: ["2", "4", "6", "8", "10", "12"],
                        datasets: [
                            {
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100
                                ]
                            }
                        ]
                    }}
                    width={100/100*Dimensions.get("window").width} // from react-native
                    height={220}
                   
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: "white",
                        backgroundGradientFrom: "#f7f6ff",
                        backgroundGradientTo: "white",
                        decimalPlaces: 1, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(137, 137, 137, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "0.5",
                            stroke: "gray"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            </View>
        </View>
    )
}