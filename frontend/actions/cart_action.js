import * as cartAPIUtil from '../util/cart_api_util';

export const ADD_FRUIT = 'ADD_FRUIT';
export const REMOVE_FRUIT = 'REMOVE_FRUIT';

export const addFruit = (fruit) => {
  return {
    type: ADD_FRUIT,
    fruit,
  };
};

export const removeFruit = (fruit) => {
  return {
    type: REMOVE_FRUIT,
    fruit,
  };
};

export const requestFruit = fruit => dispatch => {
  return cartAPIUtil.fetchFruit(fruit)
    .then(fruit => dispatch(addFruit(fruit)));
};

export const deleteFruit = fruit => dispatch => {
  return cartAPIUtil.returnFruit(fruit)
    .then(fruit => dispatch(removeFruit(fruit)));
};
