import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import HomeScreen from '../screens/HomeScreen'
const HomeStack = createStackNavigator();

export default function HomeRoute() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen 
                name="Home" 
                component={HomeScreen}
                />
        </HomeStack.Navigator>
    )
}
