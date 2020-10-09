import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import Swiper from 'react-native-deck-swiper'

export default function Cards() {
    const cardRef = React.useRef(null)
    const cards = [
        {
            id: '1',
            front: 'Hello',
            back: 'world'
        },
        {
            id: '2',
            front: 'Hello',
            back: 'world'
        },
        {
            id: '3',
            front: 'Hello',
            back: 'world'
        },
    ]
    return (
        <View style={{
            flex: 1,
        }}>
                <Swiper
                    cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
                    renderCard={(card) => {
                        return (
                            <View style={styles.card}>
                                <Text style={styles.text}>{card}</Text>
                            </View>
                        )
                    }}
                    onSwiped={(cardIndex) => {console.log(cardIndex)}}
                    onSwipedAll={() => {console.log('onSwipedAll')}}
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