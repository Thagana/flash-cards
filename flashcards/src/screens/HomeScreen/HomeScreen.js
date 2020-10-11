import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import  styles  from './HomeScreen.style';
import CardsList from '../../components/CardsList';
import { useStoreActions, useStoreState } from 'easy-peasy';

export default function HomeScreen(props) {
    const data = useStoreState((state) => state.cards);
    const [cards, setCards] = React.useState([]);
    React.useEffect(() => {
        setCards(data)
    },[data])
    return (
        <View style={styles.container}>
            <CardsList props={props} cards={cards} />
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Add Card')} activeOpacity={0.8}>
                <Ionicons name="add" size={30} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}
