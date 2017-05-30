import { connect } from 'react-redux';
import App from './App.jsx';
import { getStartLocation, getEndLocation } from '../actions/locationActions.js';
import { getUberEstimate } from '../util/api.js';

const mapStateToProps = ({location}) => ({
  location
})

const mapDispatchToProps = dispatch => ({
  getStartLocation: startLocation => dispatch(getStartLocation(startLocation)),
  getEndLocation: endLocation => dispatch(getEndLocation(endLocation)),
  getUberEstimate: (startLat, startLon, endLat, endLon) => dispatch(getUberEstimate(startLat, startLon, endLat, endLon))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
