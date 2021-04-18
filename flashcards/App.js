import React from 'react';
import Root from './src/Root';
import {createStore, persist, StoreProvider as Provider} from 'easy-peasy';
import Store from './src/store/model';

const store = createStore(persist(Store));

const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

export default App;
