import { connect } from 'react-redux';
import Profile from './profile';
import { fetchSummoner } from '../../actions/summoner_actions';
import { fetchMatches } from '../../actions/match_actions';
import { summonerSoloQueue, summonerQueues } from '../../reducers/selectors';

const mapStateToProps = (state, {params}) => {
  let queues = {
    soloQueue: state.summoner.solo_5x5,
    flexSr: state.summoner.flex_sr,
    teamFive: state.summoner.team_5x5,
    teamThree: state.summoner.team_3x3
  };
  return {
  summoner: state.summoner,
  matches: state.matches,
  queues
};};

const mapDispatchToProps = dispatch => ({
  fetchSummoner: summoner => dispatch(fetchSummoner(summoner)),
  fetchMatches: (name, offset, limit) =>
   dispatch(fetchMatches(name, offset, limit))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
