import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStore, StoreProvider as Provider} from 'easy-peasy';

import Store from './store/model';

import Routes from './routes/Routes';

const store = createStore(Store);

export default function RootConatiner() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}
