import { connect } from 'react-redux';
import App from './App.jsx';
import { fetchIPData } from '../actions/ipActions.js';

const mapDispatchToProps = dispatch => ({
  fetchIPData: (ipAddress) => dispatch(fetchIPData(ipAddress))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
