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
            const value = await AsyncStorage.getItem('cards');
            if(value !== null) {
              console.log(value);
            }
          } catch(e) {
            console.log(e);
          }
    }
    React.useEffect(() => {
        getCards()
    },[getCards()]);
    
    return (
        <View style={styles.container}>
            <CardsList props={props}/>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Add Card')}>
                <Ionicons name="add" size={30} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}
