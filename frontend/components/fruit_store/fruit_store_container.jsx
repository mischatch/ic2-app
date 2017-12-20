import { connect } from 'react-redux';
import FruitStore from './fruit_store.jsx';
import { requestAllFruit } from '../../actions/fruit_action.js';

const mapStateToProps = state => {
  return {
    allFruit: state.allFruit,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllFruit: () => dispatch(requestAllFruit()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FruitStore);
