import { combineReducers } from 'redux';

import fruitReducer from './fruit_reducer.js';
// import cartReducer from './cart_reducer.js';

const RootReducer = combineReducers({

  allFruit: fruitReducer,
  // cart: cartReducer,
});

export default RootReducer;
