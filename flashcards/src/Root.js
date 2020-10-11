import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStore, StoreProvider as Provider, persist } from 'easy-peasy';
import storage from './store/storage/storage';

import Store from './store/model';

import Routes from './routes/Routes';

const store = createStore(
    persist(Store, {
        storage: storage,
      }),
);

export default function RootConatiner(){
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        </Provider>
        )
}
