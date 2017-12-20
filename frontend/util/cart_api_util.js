import axios from 'axios';

export const fetchFruit = (fruit) => {
  return axios.get('http://localhost:8000/assets/store_items.json')
    .then(res => {
      debugger

    });
};

export const deleteFruit = (fruit) => {

};

export const returnAllFruit = (cart) => {

};

export const purchase = (cart) => {

};
