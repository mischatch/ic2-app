import React from 'react';
import CartItem from './cart_item';

class FruitStore extends React.Component{
  constructor(props){
    super(props);

    this.showCart = this.showCart.bind(this);
    this.countTotal = this.countTotal.bind(this);
    this.handleEmptyCart = this.handleEmptyCart.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
  }


  countTotal(){
    let total = 0;
    for(let key in this.props.cart){
      total += Math.round(this.props.cart[key].price) * this.props.cart[key].qty;
    }
    return total;
  }

  handleEmptyCart(){
    this.props.emptyCart();
  }

  handlePurchase(){
    this.props.storePurchase(this.props.cart);
    this.props.purchase();
  }

  showCart(){
    const cart = this.props.cart;
    if(Object.keys(cart).length === 0){
      return(
        <div>
          <h3 className="empty">Cart is empty</h3>
        </div>
      )
    } else {
      return (
        <div className="cart-master">
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
                                            removeItem={this.props.removeItem}
                                            />)}
          </div>
          <div className="total-line"></div>
          <div className="total">
            <p className="sum">Total: ${this.countTotal()}.00</p>
            <p className="empty_cart"onClick={this.handleEmptyCart}>Empty Cart</p>
          </div>
          <div>
            <button className="confirm-btn" onClick={this.handlePurchase}>Confirm Purchase</button>
          </div>
        </div>
      )
    }
  }


  render(){
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
