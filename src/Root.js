import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useStoreRehydrated} from 'easy-peasy';

import Routes from './routes/Routes';

export default function RootConatiner() {
  const isRehydrated = useStoreRehydrated();
  if (isRehydrated) {
    return (
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    );
  }
  return (
    <View>
      <Text>Loading ...</Text>
    </View>
  );
}
