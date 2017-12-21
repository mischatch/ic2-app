import { RECEIVE_ALL_FRUIT, RECEIVE_ONE_FRUIT } from '../actions/fruit_action.js';

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
    case RECEIVE_ONE_FRUIT:
      return state;
    default:
    return state;
  }
};

export default fruitReducer;
