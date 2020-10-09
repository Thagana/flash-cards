import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AddCard from '../screens/AddCard';

const AddCardStack = createStackNavigator();

export default function AddCard() {
    return (
        <AddCardStack.Navigator>
            <AddCardStack.Screen name="Add Card" component={AddCard} />
        </AddCardStack.Navigator>
    )
}
