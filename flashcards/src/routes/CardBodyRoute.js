import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import CardBody from '../screens/CardBody';

const CardBodyStack = createStackNavigator();

export default function CardBodyRoute(props) {
    return (
        <CardBodyStack.Navigator>
            <CardBodyStack.Screen name="card body" component={CardBody} {...props}/>
        </CardBodyStack.Navigator>
    )
}
