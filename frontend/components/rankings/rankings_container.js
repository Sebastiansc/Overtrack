import { connect } from 'react-redux';
import Rankings from './rankings';


const mapStateToProps = ({rankings}) => ({
  rankings: rankings
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rankings);
