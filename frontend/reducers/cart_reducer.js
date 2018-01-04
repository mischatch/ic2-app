import { ADD_FRUIT,
        REMOVE_FRUIT,
        REMOVE_ALL,
        CONFIRM } from '../actions/cart_action';

import merge from 'lodash/merge';

const cartReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case ADD_FRUIT:
    debugger
      newState = merge({}, state);
      if(Object.keys(newState).length === 0){
        action.fruit.qty = 1;
        newState[0] = action.fruit;
      } else {
        Object.keys(newState).forEach(itemNum => {
          debugger
          if(newState[itemNum].itemName === action.fruit.itemName){
            newState[itemNum].qty += 1;
            return newState;
          } else {
            action.fruit.qty = 1;
            newState[Object.keys(newState).length] = action.fruit;
          }
        });
        // newState[Object.keys(newState).length] = action.fruit;
      }

      return newState;
    default:
    return state;
  }
};

export default cartReducer;
