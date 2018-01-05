import React from 'react';

class CartItem extends React.Component{


  render(){
    const { name, qnt, img, price } = this.props;
    debugger
    return (
      <div className="cart_item">
        <div className="line_1">
          <img src={img} />
          <span>-</span><p>{qnt}</p><span>+</span>
        </div>
          <p>@ ${Math.round(price)} each = ${qnt * Math.round(price)}</p>
      </div>
    )
  }
}

export default CartItem;
