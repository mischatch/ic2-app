import { connect } from 'react-redux';
import Cart from './cart.jsx';
import { removeOneFruit } from '../../actions/cart_action';

const mapStateToProps = state => {
  return {
    allFruit: state.allFruit,
    cart: state.cart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeOneFruit: idx => dispatch(removeOneFruit(idx)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
