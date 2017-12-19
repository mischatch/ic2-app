import * as FruitAPIUtil from '../util/fruit_api_util.js';

export const RECEIVE_ALL_FRUIT = "RECEIVE_ALL_FRUIT";

export const receiveAllFruit = fruit => ({
  type: RECEIVE_ALL_FRUIT,
  fruit: fruit
});

// export const receiveOneFruit = oneFruit => ({
//   type: RECEIVE_ONE_FRUIT,
//   oneFruit
// });
// export const returnOneFruit = oneFruit => ({
//   type: RECEIVE_ONE_FRUIT,
//   oneFruit
// });



export const requestAllFruit = () => dispatch => {
  debugger
  return FruitAPIUtil.fetchAllFruit()
    .then(fruit => dispatch(receiveAllFruit(fruit)));
};
