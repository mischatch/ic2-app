

export const ADD_FRUIT = 'ADD_FRUIT';
export const REMOVE_FRUIT = 'REMOVE_FRUIT';
export const REMOVE_ALL = 'REMOVE_ALL';
export const CONFIRM = 'CONFIRM';

export const addFruit = (fruit) => {
  debugger
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

export const removeAll = (cart) => {
  return {
    type: REMOVE_ALL,
    cart,
  };
};

export const confirm = (cart) => {
  return {
    type: CONFIRM,
    fruit,
  };
};
