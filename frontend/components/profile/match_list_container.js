import { connect } from 'react-redux';
import MatchList from './match_list';
import { values } from 'lodash';

const mapStateToProps = (state, {params}) => {
  debugger;
  return {
  summoner: state.summoner,
  matches: state.matches,

};};

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchList);
