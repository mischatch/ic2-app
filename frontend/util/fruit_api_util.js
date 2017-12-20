import axios from 'axios';

export const fetchAllFruit = () => {
  return axios.get('http://localhost:8000/assets/store_items.json');
    // .then((res) => console.log(res));
};
