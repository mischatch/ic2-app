

export const ADD_FRUIT = 'ADD_FRUIT';
export const REMOVE_ITEM = 'REMOVE_FRUIT';
export const EMPTY_CART = 'EMPTY_CART';
export const PURCHASE = 'PURCHASE';
export const REMOVE_ONE_FRUIT = 'REMOVE_ONE_FRUIT';

export const addFruit = (fruit, idx) => {
  return {
    type: ADD_FRUIT,
    fruit,
    idx,
  };
};

export const removeOneFruit = (idx) => {
  return {
    type: REMOVE_ONE_FRUIT,
    idx,
  };
};

export const removeItem = (idx) => {
  return {
    type: REMOVE_ITEM,
    idx,
  };
};

export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};

export const purchase = () => {
  return {
    type: PURCHASE,
  };
};
