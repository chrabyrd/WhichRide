import { connect } from 'react-redux';
import SimpleMap from './SimpleMap.jsx';

const mapStateToProps = ({ ipData }) => ({
  ipData,
});

export default connect (
  mapStateToProps,
  null
)(SimpleMap);
