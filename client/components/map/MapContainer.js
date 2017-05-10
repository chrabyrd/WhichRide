import { connect } from 'react-redux';
import Map from './Map.jsx';
import { fetchIPData } from '../../actions/ipActions.js';

const mapStateToProps = ({ ipData }) => ({
  ipData,
});

const mapDispatchToProps = dispatch => ({
  fetchIPData: (ipAddress) => dispatch(fetchIPData(ipAddress))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Map);
