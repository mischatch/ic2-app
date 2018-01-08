import { ADD_FRUIT,
        REMOVE_ITEM,
        REMOVE_ALL,
        CONFIRM,
        REMOVE_ONE_FRUIT } from '../actions/cart_action';

import merge from 'lodash/merge';

const cartReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  const idx = action.idx;
  switch(action.type){
    case ADD_FRUIT:
    // debugger
      newState = merge({}, state);
      if(newState === {} || newState[idx] === undefined){
        action.fruit.qty = 1;
        newState[idx] = action.fruit;
      } else if (newState[idx] !== undefined) {
        newState[idx].qty += 1;
      }

      return newState;
      case REMOVE_ONE_FRUIT:
      debugger
        newState = merge({}, state);
        newState[idx].qty -= 1;
        if(newState[idx].qty === 0){
          delete newState[idx];
        }
        return newState;
      case REMOVE_ITEM:
      newState = merge({}, state);
      delete newState[idx];
      return newState;
    default:
    return state;
  }
};

export default cartReducer;
