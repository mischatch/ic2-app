import { connect } from 'react-redux';
import Cart from './cart.jsx';

const mapStateToProps = state => {
  return {
    allFruit: state.allFruit,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // requestAllFruit: () => dispatch(requestAllFruit()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
