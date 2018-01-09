import React from 'react';
import FruitStoreContainer from './fruit_store_container';
import FruitStoreItemContainer from '../fruit_item/fruit_store_item_container';

class FruitStore extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.receiveAllFruit();
  }

  render(){
    const { allFruit } = this.props;
    return (
      <div className="store">
        { Object.keys(allFruit).map((id) => <FruitStoreItemContainer
                                key={id}
                                id={id}
                                name={allFruit[id].itemName}
                                img={allFruit[id].imgSrc}
                                price={allFruit[id].price}
                                qnt={allFruit[id].quantityRemaining}
                                />)}
      </div>
    )
  }
}

export default FruitStore;
