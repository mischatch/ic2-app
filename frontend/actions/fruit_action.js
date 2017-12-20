import * as FruitAPIUtil from '../util/fruit_api_util.js';

export const RECEIVE_ALL_FRUIT = 'RECEIVE_ALL_FRUIT';

export const receiveAllFruit = ({data}) => {
    return {
    type: RECEIVE_ALL_FRUIT,
    data,
  };
};

// export const receiveOneFruit = oneFruit => ({
//   type: RECEIVE_ONE_FRUIT,
//   oneFruit
// });
// export const returnOneFruit = oneFruit => ({
//   type: RECEIVE_ONE_FRUIT,
//   oneFruit
// });

export const requestAllFruit = () => dispatch => {
  return FruitAPIUtil.fetchAllFruit()
    .then(allFruit => dispatch(receiveAllFruit(allFruit)));
};
