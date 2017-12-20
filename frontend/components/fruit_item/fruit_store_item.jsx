import React from 'react';
import ImageLoader from 'react-load-image';
import spinner from '../../../assets/spinner.gif';


class FruitStoreItem extends React.Component{
  constructor(props){
    super(props);
  }

  Preloader(props) {
    return <img src={spinner} alt='spinner' />;
  }

  render(){
    const { name, img, price, qnt} = this.props;
    return (
      <div className="store-item">
        <ImageLoader
          src={img}
          >
          <img  />
            <div>Error!</div>
          {this.Preloader()}
        </ImageLoader>
        <p className="name">{name.charAt(0).toUpperCase() + name.slice(1)}</p>
      <br/>
        {Math.round(price)}
        {qnt} in stock
      </div>
    )
  }
}

export default FruitStoreItem;
