import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './core/configureStore';
import Home from './features/home/Home';
import 'normalize.css';

const store = configureStore();

function App() {
  return (
    <Provider store={store} >
      <Home />
    </Provider>
  );
}

export default App;
