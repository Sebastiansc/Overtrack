import { FETCH_MATCHES, receiveMatches } from '../actions/match_actions';
import { fetchMatches } from '../util/match_api_util';

export default ({getState, dispatch}) => next => action => {
  let matchesSuccess = matches => dispatch(receiveMatches(matches));

  switch (action.type) {
    case FETCH_MATCHES:
      const error = data => console.log(data);
      fetchMatches(
        action.name,
        action.offset,
        action.limit,
        matchesSuccess,
        error
      );
      return next(action);
    default:
      return next(action);
  }
};
