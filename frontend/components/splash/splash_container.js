import { connect } from 'react-redux';
import Splash from './splash';
import { fetchSummoner } from '../../actions/summoner_actions';

const mapStateToProps = state => ({
  summoner: state.summoner,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  fetchSummoner: summoner => dispatch(fetchSummoner(summoner))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
