import { connect } from 'react-redux';
import SimpleMap from './SimpleMap.jsx';
import { fetchIPData } from '../../actions/ipActions.js';

const mapStateToProps = ({ ipData, location }) => ({
  ipData,
  location
});

const mapDispatchToProps = dispatch => ({
  fetchIPData: (ipAddress) => dispatch(fetchIPData(ipAddress))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(SimpleMap);
