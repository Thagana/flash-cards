import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import CardsScreen from '../screens/Cards'

const CardsStack = createStackNavigator();

export default function CardsStackScreen() {
    return (
        <CardsStack.Navigator>
            <CardsStack.Screen 
                name="Mathematics" 
                component={CardsScreen}
                />
        </CardsStack.Navigator>
    )
}
