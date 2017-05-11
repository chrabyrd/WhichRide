import { connect } from 'react-redux';
import App from './App.jsx';
import { fetchIPData } from '../actions/ipActions.js';
import { getStartLocation, getEndLocation } from '../actions/locationActions.js';

const mapDispatchToProps = dispatch => ({
  fetchIPData: (ipAddress) => dispatch(fetchIPData(ipAddress)),
  getStartLocation: startLocation => dispatch(getStartLocation(startLocation)),
  getEndLocation: endLocation => dispatch(getEndLocation(endLocation))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
