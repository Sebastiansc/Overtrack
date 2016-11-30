import { connect } from 'react-redux';
import Rankings from './rankings';
import { fetchRankings } from '../../actions/ranking_actions';

const mapStateToProps = ({rankings}, {params}) => {
  debugger;
  const queue = location.hash.split('/')[2] || "solo_5x5";
  return {
    rank: rankings[queue] || [],
  };
};

const mapDispatchToProps = dispatch => ({
  fetchRankings: tier => dispatch(fetchRankings(tier))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rankings);
