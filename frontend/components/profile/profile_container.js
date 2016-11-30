import { connect } from 'react-redux';
import Profile from './profile';
import { fetchSummoner } from '../../actions/summoner_actions';

const mapStateToProps = (state, {params}) => {
  return {
  summoner: state.summoner,
  matches: state.matches
}};

const mapDispatchToProps = dispatch => ({
  fetchSummoner: summoner => dispatch(fetchSummoner(summoner))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
