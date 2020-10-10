import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import styles from './CardsList.style';

export default function CardsList({props, cards}) {

    function trim(text){
        if(text.length > 20){
            return text.substr(0, 20 - 1) + ' ...';
        }
        return text;
    }

    function Card({ item }) {
        const { imageSrc, title, cartigory } = item;
        return (
            <TouchableOpacity style={styles.cardContainer} onPress={() => {  props.navigation.navigate('Cards')  }}>
                <View style={styles.imageConatiner}>
                    {
                        imageSrc ? (
                            <Image source={{ uri: imageSrc }} style={styles.image}/>
                        ): (
                            <Image source={require('../../assets/icons/image_1.jpg')} style={styles.image}/>
                        )
                    }
                </View>
                <View>
                    <View>
                        <Text style={styles.title} numberOfLines={1}>
                            {trim(title)}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.cartigory}>
                            {`@${cartigory}`}
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
                data={cards}
                renderItem={Card}
                keyExtractor={(data, index) => index.toString()}
            />
        </View>
    )
}
