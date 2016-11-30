import {
  FETCH_SUMMONER,
  receiveSummoner
} from '../actions/summoner_actions';
import { receiveErrors } from '../actions/error_actions';
import { fetchSummoner } from '../util/summoner_api_util';

export default ({getState, dispatch}) => next => action => {
  let receiveSummonerSuccess = (summoner) =>
    dispatch(receiveSummoner(summoner));
  let failure = (error) => dispatch(receiveErrors(error));
  switch (action.type) {
    case FETCH_SUMMONER:
      fetchSummoner(action.summoner, receiveSummonerSuccess, failure);
      return next(action);
    default:
      return next(action);
  }
};
