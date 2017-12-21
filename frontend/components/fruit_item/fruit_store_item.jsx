import React from 'react';


class FruitStoreItem extends React.Component{
  constructor(props){
    super(props);
    // debugger
    this.handleAdd = this.handleAdd.bind(this);

  }

  handleAdd(e){
    debugger
    this.props.addFruit(this.props.allFruit[e.target.value]);
  }


  render(){
    const { id, name, img, price, qnt } = this.props;
    return (
      <div className="store-item">

        <img src={img} />

        <p className="name">{name.charAt(0).toUpperCase() + name.slice(1)}</p>
        <br/>
        <span className="price">${Math.round(price)}</span>
        <span className="quantity">{qnt} in Stock</span>

        <button onClick={this.handleAdd} value={id} className="add">Add to Cart</button>
      </div>
    )
  }
}

export default FruitStoreItem;
