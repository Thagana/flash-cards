import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import  styles  from './HomeScreen.style';
import CardsList from '../../components/CardsList';

export default function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <CardsList props={props}/>
            <TouchableOpacity style={styles.button}>
                <Ionicons name="add" size={30} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}
