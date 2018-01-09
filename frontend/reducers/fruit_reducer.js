import { RECEIVE_ALL_FRUIT, RECEIVE_ONE_FRUIT, STORE_PURCHASE } from '../actions/fruit_action.js';

import merge from 'lodash/merge';

const fruitReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_ALL_FRUIT:
      newState = merge({}, state);

      for(let i = 0; i < action.data.length; i++){
        newState[i] = action.data[i];
      }
      return newState;
    case STORE_PURCHASE:
      newState = merge({}, state);
      for(let item in action.cart){
        newState[item].quantityRemaining = newState[item].quantityRemaining - action.cart[item].qty;
      }
      return newState;
    default:
    return state;
  }
};

export default fruitReducer;
