import * as FruitAPIUtil from '../util/fruit_api_util.js';

export const RECEIVE_ALL_FRUIT = 'RECEIVE_ALL_FRUIT';
export const STORE_PURCHASE = 'STORE_PURCHASE';

export const receiveAllFruit = ({data}) => {
    return {
    type: RECEIVE_ALL_FRUIT,
    data,
  };
};

export const storePurchase = (cart) => {
  return {
    type: STORE_PURCHASE,
    cart,
  };
};



export const requestAllFruit = () => dispatch => {
  return FruitAPIUtil.fetchAllFruit()
    .then(allFruit => dispatch(receiveAllFruit(allFruit)));
};
