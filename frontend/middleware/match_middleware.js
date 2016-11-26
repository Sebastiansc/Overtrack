import { FETCH_MATCHES, receiveMatches } from '../actions/match_actions';
import { shapeMatch } from './reducers/selectors';
import { fetchMatchList, fetchMatch } from '../util/match_api_util';

export default ({getState, dispatch}) => next => action => {
  let matchListSuccess = matches => {
    let allMatches = [];
    const success = match => allMatches.push(shapeMatch(match));
    matches.forEach(match => {
      fetchMatch(match.matchId, success);
    });
    dispatch(receiveMatches(allMatches));
  };

  switch (action.type) {
    case FETCH_MATCHES:
      fetchMatchList(
        action.summerId,
        action.offset,
        action.limit,
        matchListSuccess
      );
      return next(action);
    default:
      return next(action);
  }
};
