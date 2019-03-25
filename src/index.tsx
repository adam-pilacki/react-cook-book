import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, StoreEnhancer } from 'redux';
import rootReducer from './reducers';
import AppComponent from './components/App';
import persistState from 'redux-localstorage';
import './index.css';

// https://www.npmjs.com/package/redux-localstorage
const persistStateEnhancer = persistState(
  undefined,
  'reduxStateDev'
);

const enhancer = compose(persistStateEnhancer);

const store = createStore(
  rootReducer,
  {
    recipes: []
  },
  enhancer as StoreEnhancer
);

render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById('root')
);