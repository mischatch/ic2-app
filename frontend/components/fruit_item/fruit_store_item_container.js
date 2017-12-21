import { connect } from 'react-redux';
import FruitStoreItem from './fruit_store_item';
import { addFruit } from '../../actions/cart_action';

const mapStateToProps = state => {
  return {
    allFruit: state.allFruit,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFruit: (fruit) => dispatch(addFruit(fruit)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FruitStoreItem);
