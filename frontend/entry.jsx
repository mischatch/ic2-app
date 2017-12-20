import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root.jsx';
import fetchAllFruit from './util/fruit_api_util';
import requestAllFruit from './actions/fruit_action.js';
import fetchFruit from './util/cart_api_util';

document.addEventListener('DOMContentLoaded', () => {

  let store;

  store = configureStore();

  window.store = store;
  window.getState = store.getState;
  window.fetchAllFruit = fetchAllFruit;
  window.requestAllFruit = requestAllFruit;
  window.fetchFruit = fetchFruit;
  // window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);

});
