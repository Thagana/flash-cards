import React from 'react'
import { View, Text } from 'react-native'

export default function Card({ item }) {
    const { image, title, cartigory } = item;
    return (
        <View style={styles.container}>
            <View>
                {/* <Image  /> */}
            </View>
            <View>
                <View>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
                <View>
                    <Text style={styles.cartigory}>
                        {cartigory}
                    </Text>
                </View>
            </View>
        </View>
    )
}
