import { FETCH_MATCH_LIST, receiveMatches } from '../actions/match_actions';
import { shapeMatch } from '../reducers/selectors';
import { fetchMatchList, fetchMatch } from '../util/match_api_util';

export default ({getState, dispatch}) => next => action => {
  // Iterates through matchList.
  // Fetches each match details from API.
  // Uses selectors to shape them in compliance with DB schema.
  // Gathers all matches into a single array to reduce the overhead of dispatching one action for each match.
  let matchListSuccess = matches => {
    let allMatches = [];
    const success = match => allMatches.push(shapeMatch(match));
    matches.matches.forEach(match => {
      setTimeout(() => fetchMatch(match.matchId, success), 600);
    });
    dispatch(receiveMatches(allMatches));
  };

  switch (action.type) {
    case FETCH_MATCH_LIST:
      const error = data => console.log(data);
      fetchMatchList(
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
