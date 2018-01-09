import React from 'react';

class CartItem extends React.Component{
  constructor(props){
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.checkAmount = this.checkAmount.bind(this);
  }

  checkAmount(id){
    if(this.props.qntRemain === this.props.qty){
      return true;
    } else {
      return false;
    }
  }

  handleRemove(){
    this.props.removeOneFruit(this.props.id);
  }

  handleAdd(){
    this.props.addFruit({}, this.props.id);
    // this.checkAmount(this.props.id);
  }

  handleRemoveItem(){
    this.props.removeItem(this.props.id);
  }

  render(){
    const { name, qty, img, price, id } = this.props;
    return (
      <div className="cart_item">
        <div className="line_1">
          <img src={img} />
          <button onClick={this.handleRemove} value={id}>-</button><p>{qty}</p><button disabled={this.checkAmount(id)} onClick={this.handleAdd}>+</button>
        </div>
        <div className="line_2">
          <p>@ ${Math.round(price)} each = ${qty * Math.round(price)}</p>
          <p onClick={this.handleRemoveItem}>Delete</p>
        </div>
      </div>
    )
  }
}

export default CartItem;
