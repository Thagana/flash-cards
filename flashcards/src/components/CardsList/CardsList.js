import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import styles from './CardsList.style';

export default function CardsList({props}) {
    const data = [
        {
            id: '1',
            title: 'Test One',
            cartigory: "mathematics",
            image: require('../../assets/icons/image_1.jpg')
        },
        {
            id: '2',
            title: 'Test One',
            cartigory: "mathematics",
            image: require('../../assets/icons/image_2.jpg')
        },
        {
            id: '3',
            title: 'Test One',
            cartigory: "mathematics",
            image: require('../../assets/icons/image_3.jpg')
        },
        {
            id: '4',
            title: 'Test One',
            cartigory: "mathematics",
            image: require('../../assets/icons/image_4.jpg')
        },
        {
            id: '5',
            title: 'Test One',
            cartigory: "mathematics",
            image: require('../../assets/icons/image_4.jpg')
        },
        {
            id: '6',
            title: 'Test One',
            cartigory: "mathematics",
            image: require('../../assets/icons/image_4.jpg')
        }
    ];
    function Card({ item }) {
        const { image, title, cartigory } = item;
        return (
            <TouchableOpacity style={styles.cardContainer} onPress={() => {  props.navigation.navigate('Cards')  }}>
                <View style={styles.imageConatiner}>
                    <Image source={image} style={styles.image}/>
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
            </TouchableOpacity>
        )
    }
    return (
        <View style={{
            justifyContent: 'space-evenly',
            alignItems: "center"
        }}>
            <FlatList
                data={data}
                renderItem={Card}
                keyExtractor={(data, index) => data.id}
            />
        </View>
    )
}
