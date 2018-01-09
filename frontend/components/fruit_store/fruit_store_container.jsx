import { connect } from 'react-redux';
import FruitStore from './fruit_store.jsx';
import { receiveAllFruit } from '../../actions/fruit_action.js';

const mapStateToProps = state => {
  return {
    allFruit: state.allFruit,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveAllFruit: () => dispatch(receiveAllFruit()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FruitStore);
