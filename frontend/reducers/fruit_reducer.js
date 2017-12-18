import { RECEIVE_ALL_FRUIT } from '../actions/fruit_action.js';

import merge from 'lodash/merge';

const fruitReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type){
    case RECEIVE_ALL_FRUIT:
      return action.fruit;
    // case RECEIVE_ONE_FRUIT:
    default:
    return state;
  }
};

export default fruitReducer;
