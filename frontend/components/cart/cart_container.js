import { connect } from 'react-redux';
import Cart from './cart.jsx';
import { removeOneFruit, addFruit, removeItem, emptyCart } from '../../actions/cart_action';
import { storePurchase } from '../../actions/fruit_action';
import { purchase } from '../../actions/cart_action';

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeOneFruit: idx => dispatch(removeOneFruit(idx)),
    addFruit: (fruit, idx) => dispatch(addFruit(fruit, idx)),
    removeItem: idx => dispatch(removeItem(idx)),
    emptyCart: () => dispatch(emptyCart()),
    storePurchase: (cart) => dispatch(storePurchase(cart)),
    purchase: () => dispatch(purchase()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
