import React from 'react';
import Root from './src/Root';
import AsyncStorage from '@react-native-community/async-storage';
import {createStore, persist, StoreProvider as Provider} from 'easy-peasy';
import Store from './src/store/model';
import storage from './src/store/storage/storage';

const store = createStore(persist(Store, {storage: AsyncStorage}));

const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

export default App;
