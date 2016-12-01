import { connect } from 'react-redux';
import MatchList from './match_list';
import { fetchSummoner } from '../../actions/summoner_actions';
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
  fetchSummoner: summoner => dispatch(fetchSummoner(summoner))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchList);
