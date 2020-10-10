import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import Swiper from 'react-native-deck-swiper'

export default function Cards({ route, navigation }) {
    const [data, setData] = React.useState(() => {
        const { cards } = route.params
        return cards;
    })
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
                <Swiper
                    cards={data}
                    renderCard={(card) => {
                        return (
                            <View style={styles.card}>
                                <Text style={styles.text}>{card}</Text>
                            </View>
                        )
                    }}
                    onSwiped={(cardIndex) => {console.log(cardIndex)}}
                    onSwipedAll={() => { navigation.navigate('Home') }}
                    cardIndex={0}
                    backgroundColor={'#fff'}
                    stackSize= {3}>
                </Swiper>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#356196'
    },
    text: {
        fontFamily: "SansitaSwashed-Regular",
        color: '#fff'
    }
})