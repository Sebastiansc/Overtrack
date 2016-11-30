import { FETCH_MATCH_LIST, receiveMatches } from '../actions/match_actions';
import { shapeMatch } from '../reducers/selectors';
import { fetchMatchList, fetchMatch } from '../util/match_api_util';

export default ({getState, dispatch}) => next => action => {
  let matchListSuccess = matches => dispatch(receiveMatches(matches));

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
