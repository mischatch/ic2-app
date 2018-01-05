import React from 'react';
import CartItem from './cart_item';
// import FruitStoreItem from '../fruit_item/fruit_store_item';

class FruitStore extends React.Component{
  constructor(props){
    super(props);

    this.showCart = this.showCart.bind(this);
  }

  showCart(){

    const cart = this.props.cart;
    debugger
    if(Object.keys(cart).length === 0){
      return(
        <div>
          <h3>Cart is empty</h3>
        </div>
      )
    } else {
      debugger
      return (
        <div>
        {Object.keys(cart).map(id => <CartItem
                                        key={id}
                                        id={id}
                                        name={cart[id].itemName}
                                        img={cart[id].imgSrc}
                                        price={cart[id].price}
                                        qntRemain={cart[id].quantityRemaining}
                                        qnt={cart[id].qty}
                                        />)}
        </div>
      )
    }
  }


  render(){
    // const { allFruit } = this.props;

    debugger
    return (
      <div className="cart">
        <h1>Shopping Cart</h1>
          {Object.keys(this.props.cart).length} items
          { this.showCart() }
      </div>
    )
  }
}

export default FruitStore;
