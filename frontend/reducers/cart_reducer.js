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
      if(newState === {} || newState[action.idx] === undefined){
        action.fruit.qty = 1;
        newState[action.idx] = action.fruit;
      } else if (newState[action.idx] !== undefined) {
        newState[action.idx].qty += 1;
      }

      return newState;
    default:
    return state;
  }
};

export default cartReducer;
