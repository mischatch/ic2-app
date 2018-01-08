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
                                        qty={cart[id].qty}
                                        removeOneFruit={this.props.removeOneFruit}
                                        addFruit={this.props.addFruit}
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
          <div className="items">{Object.keys(this.props.cart).length} {Object.keys(this.props.cart).length === 1  ? 'item' : 'items' }</div>
          { this.showCart() }
      </div>
    )
  }
}

export default FruitStore;
