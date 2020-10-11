import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-community/async-storage';
import  styles  from './HomeScreen.style';
import CardsList from '../../components/CardsList';

export default function HomeScreen(props) {
    const [cards, setCards] = React.useState([]);
    const getCards = async () => {
        try {
            const value = await AsyncStorage.getItem('data');
            if(value !== null) {
              const parsed = JSON.parse(value);
              setCards(parsed);
            }
          } catch(e) {
            console.log(e);
          }
    }
    function clearAllData() {
        AsyncStorage.getAllKeys()
            .then(keys => AsyncStorage.multiRemove(keys))
            .then(() => alert('success'));
    }
    React.useEffect(() => {
        getCards()
    },[]);
    
    return (
        <View style={styles.container}>
            <CardsList props={props} cards={cards} />
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Add Card')} activeOpacity={0.8}>
                <Ionicons name="add" size={30} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}
