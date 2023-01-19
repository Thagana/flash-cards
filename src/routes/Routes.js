import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreeStack from './HomeRoute';
import AddCardRoute from './AddCardRoute';

import Options from '../components/HeaderLeft';
import Title from '../components/Title';
import CardBodyScreen from '../screens/CardBody';
import CardsScreen from '../screens/Cards';

const RootStack = createStackNavigator();

export default function RootStackScreen() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Home"
        component={HomeScreeStack}
        options={{
          headerRight: () => <Options />,
          headerTitle: () => <Title />,
        }}
      />
      <RootStack.Screen name="Cards" component={CardsScreen} />
      <RootStack.Screen name="Add Card" component={AddCardRoute} />
      <RootStack.Screen name="Card Body" component={CardBodyScreen} />
    </RootStack.Navigator>
  );
}
