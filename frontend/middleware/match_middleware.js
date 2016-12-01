import { FETCH_MATCHS, receiveMatches } from '../actions/match_actions';
import { fetchMatches } from '../util/match_api_util';

export default ({getState, dispatch}) => next => action => {
  let matchListSuccess = matches => dispatch(receiveMatches(matches));

  switch (action.type) {
    case FETCH_MATCHS:
      const error = data => console.log(data);
      fetchMatches(
        action.summonerId,
        action.offset,
        action.limit,
        matchListSuccess,
        error
      );
      return next(action);
    default:
      return next(action);
  }
};
