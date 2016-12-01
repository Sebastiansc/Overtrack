import { connect } from 'react-redux';
import MatchList from './match_list';

const mapStateToProps = (state, {params}) => {
  debugger;
  return {
  summoner: state.summoner,
  matches: state.matches
};};

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchList);
