import { connect } from 'react-redux';
import App from './App.jsx';
import { getStartLocation, getEndLocation } from '../actions/locationActions.js';

const mapDispatchToProps = dispatch => ({
  getStartLocation: startLocation => dispatch(getStartLocation(startLocation)),
  getEndLocation: endLocation => dispatch(getEndLocation(endLocation))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
