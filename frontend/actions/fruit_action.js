import * as FruitAPIUtil from '../util/fruit_api_util';

export const RECEIVE_ALL_FRUIT = 'RECEIVE_ALL_FRUIT';

export const receiveAllFruit = fruit => ({
  type: RECEIVE_ALL_FRUIT,
  fruit
});

// export const receiveOneFruit = oneFruit => ({
//   type: RECEIVE_ONE_FRUIT,
//   oneFruit
// });
// export const returnOneFruit = oneFruit => ({
//   type: RECEIVE_ONE_FRUIT,
//   oneFruit
// });



export const requestAllFruit = fruit => dispatch => {
  return FruitAPIUtil.fetchAllFruit()
    .then(allFruit => dispatch(receiveAllFruit(allFruit)));
};
