import { connect } from 'react-redux';
import Profile from './profile';
import { fetchSummoner } from '../../actions/summoner_actions';
import { summonerSoloQueue } from '../../reducers/selectors';

const mapStateToProps = (state, {params}) => ({
  summoner: state.summoner,
  matches: state.matches
});

const mapDispatchToProps = dispatch => ({
  fetchSummoner: summoner => dispatch(fetchSummoner(summoner))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
