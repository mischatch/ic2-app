import React from 'react';
import FruitStoreContainer from './fruit_store_container';
import FruitStoreItem from '../fruit_item/fruit_store_item';

class FruitStore extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.requestAllFruit();
  }

  render(){
    const { allFruit } = this.props;

    return (
      <div className="store">
        { allFruit.map((fruit, i) => <FruitStoreItem
                                key={i}
                                name={fruit.itemName}
                                img={fruit.imgSrc}
                                price={fruit.price}
                                qnt={fruit.quantityRemaining}
                                />)}
      </div>
    )
  }
}

export default FruitStore;
