import React from 'react';

class CartItem extends React.Component{


  render(){
    const { name, qnt, img, price } = this.props;
    debugger
    return (
      <div>
        <img src={img} />
          <p>{qnt}</p>
            <p>@ ${Math.round(price)} each = {qnt * Math.round(price)}</p>
      </div>
    )
  }
}

export default CartItem;
