import { FETCH_RANKINGS, receiveRankings } from '../actions/ranking_actions';
import { fetchRankings } from '../util/ranking_api_util';

export default ({getState, dispatch}) => next => action => {
  const success = matches => dispatch(receiveRankings(matches));
  const error = data => console.log(data);

  switch (action.type) {
    case FETCH_RANKINGS:
      fetchRankings(
        action.tier,
        success,
        error
      );
      return next(action);
    default:
      return next(action);
  }
};
