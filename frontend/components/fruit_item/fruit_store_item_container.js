import { connect } from 'react-redux';
import FruitStoreItem from './fruit_store_item';
import { addFruit } from '../../actions/cart_action';

const mapStateToProps = (state) => {
  return {
      allFruit: state.allFruit,
      cart: state.cart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFruit: (fruit, idx) => dispatch(addFruit(fruit, idx)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FruitStoreItem);
