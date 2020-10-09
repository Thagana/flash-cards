import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, Text } from 'react-native';
import HomeScreeStack from './HomeRoute';
import CardsScreen from './CardsRoutes';

import Options from '../components/HeaderLeft';
import Title from '../components/Title'

const RootStack = createStackNavigator();

export default function RootStackScreen() {
    return (
       <RootStack.Navigator>
           <RootStack.Screen 
                    name="Home" 
                    component={HomeScreeStack}   
                    options={{
                        headerRight: () => (<Options />),
                        headerTitle: () => (<Title />)
                  }}/>
           <RootStack.Screen name="Cards" component={CardsScreen} />
       </RootStack.Navigator>
    )
}
