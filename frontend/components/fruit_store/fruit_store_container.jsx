import { connect } from 'react-redux';
import FruitStore from './fruit_store';
import requestAllFruit from '../../actions/fruit_action';

const mapStateToProps = state => {
  return {
    allFruit: state.allFruit,
  };
};

const mapDispatchToProps = dispatch => {
  debugger
  return {
    requestAllFruit: () => dispatch(requestAllFruit()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FruitStore);
