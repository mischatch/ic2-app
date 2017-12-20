import React from 'react';
import FruitStoreContainer from './fruit_store/fruit_store_container';
import CartContainer from './cart/cart_container';

const App = () => {
  return (
    <div className="main">
      <div className="store-name">
        <h1>Fruit</h1>
      </div>
      <div className="main-layout">
          <FruitStoreContainer />
          <CartContainer />
      </div>
  </div>
  )
}

export default App;
