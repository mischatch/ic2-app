import React from 'react';

class CartItem extends React.Component{
  constructor(props){
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(e){
    debugger
    this.props.removeOneFruit(this.props.id);
  }

  render(){
    const { name, qty, img, price, id } = this.props;
    debugger
    return (
      <div className="cart_item">
        <div className="line_1">
          <img src={img} />
          <span onClick={this.handleRemove} value={id}>-</span><p>{qty}</p><span>+</span>
        </div>
          <p>@ ${Math.round(price)} each = ${qty * Math.round(price)}</p>
      </div>
    )
  }
}

export default CartItem;
