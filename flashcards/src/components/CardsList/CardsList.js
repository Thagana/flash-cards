import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity, Alert } from 'react-native'
import { useStoreActions, useStoreState } from 'easy-peasy';
import styles from './CardsList.style';

export default function CardsList({props, cards}) {
    const value = useStoreState((state) => state.cards);
    const deleteCard = useStoreActions((action) => action.deleteCard);
    const trim = (text) => {
        if(text.length > 20){
            return text.substr(0, 20 - 1) + ' ...';
        }
        return text;
    }
    const handleDelete = (id) => {
        const data = value;
        data.forEach((card, index) => {
            if(card.cartigory === id){
                data.splice(index, 1);
            }
        });
        deleteCard(data);
    }
    const openDeleteDialog = (id) => {
        Alert.alert(
            "Delete Confirmation",
            "Are you sur you want to delete the card?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => handleDelete(id) }
            ],
            { cancelable: false }
          );
               
    }
    function Card({ item }) {
        const { imageSrc, title, cartigory, content } = item;
        return (
            <TouchableOpacity style={styles.cardContainer} onPress={() => {  props.navigation.navigate('Cards', { cards: content })  }} activeOpacity={0.8} onLongPress={() => openDeleteDialog(cartigory)}>
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
