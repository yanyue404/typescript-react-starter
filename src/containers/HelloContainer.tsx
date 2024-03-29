import HelloStateManager from '../components/HelloStateManager';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = ({ enthusiasmLevel, languageName }: StoreState) => {
  return {
    enthusiasmLevel,
    name: languageName
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloStateManager);
