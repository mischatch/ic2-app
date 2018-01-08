import React from 'react';

class CartItem extends React.Component{
  constructor(props){
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleRemove(){
    debugger
    this.props.removeOneFruit(this.props.id);
  }

  handleAdd(){
    debugger
    this.props.addFruit({}, this.props.id);
  }

  render(){
    const { name, qty, img, price, id } = this.props;
    debugger
    return (
      <div className="cart_item">
        <div className="line_1">
          <img src={img} />
          <span onClick={this.handleRemove} value={id}>-</span><p>{qty}</p><span onClick={this.handleAdd}>+</span>
        </div>
          <p>@ ${Math.round(price)} each = ${qty * Math.round(price)}</p>
      </div>
    )
  }
}

export default CartItem;
