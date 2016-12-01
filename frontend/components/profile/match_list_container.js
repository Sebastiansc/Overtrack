import { connect } from 'react-redux';
import MatchList from './match_list';
import { fetchMatches } from '../../actions/match_actions';
import { values } from 'lodash';

const mapStateToProps = (state, {params}) => {
  return {
  summoner: state.summoner,
  matches: state.matches,

};};

const mapDispatchToProps = dispatch => ({
  fetchMatches: (name, offset, limit) =>
   dispatch(fetchMatches(name, offset, limit))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchList);
