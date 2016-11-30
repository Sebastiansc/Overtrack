import { connect } from 'react-redux';
import Profile from './profile';


const mapStateToProps = (state, {params}) => ({
  summonerName: params.summonerName
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
