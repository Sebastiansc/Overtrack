import { FETCH_RANKING, receiveRanking } from '../actions/match_actions';
import { fetchRanking } from '../util/ranking_api_util';

export default ({getState, dispatch}) => next => action => {
  const success = matches => dispatch(receiveRanking(matches));
  const error = data => console.log(data);

  switch (action.type) {
    case FETCH_RANKING:
      fetchRanking(
        action.tier,
        success,
        error
      );
      return next(action);
    default:
      return next(action);
  }
};
