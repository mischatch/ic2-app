import * as FruitAPIUtil from '../util/fruit_api_util.js';

export const RECEIVE_ALL_FRUIT = 'RECEIVE_ALL_FRUIT';
export const STORE_PURCHASE = 'STORE_PURCHASE';

export const receiveAllFruit = () => {
    return {
    type: RECEIVE_ALL_FRUIT,
    data: FruitAPIUtil.fetchAllFruit(),
  };
};

export const storePurchase = (cart) => {
  return {
    type: STORE_PURCHASE,
    cart,
  };
};
