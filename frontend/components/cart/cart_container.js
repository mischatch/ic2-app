import { connect } from 'react-redux';
import Cart from './cart.jsx';
import { removeOneFruit, addFruit, removeItem } from '../../actions/cart_action';

const mapStateToProps = state => {
  return {
    allFruit: state.allFruit,
    cart: state.cart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeOneFruit: idx => dispatch(removeOneFruit(idx)),
    addFruit: (fruit, idx) => dispatch(addFruit(fruit, idx)),
    removeItem: idx => dispatch(removeItem(idx)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
