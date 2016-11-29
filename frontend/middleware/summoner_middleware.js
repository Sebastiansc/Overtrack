import {
  FETCH_SUMMONER,
  fetchSummoner,
  receiveSummoner
} from '../actions/summoner_actions';

import { getSummoner } from '../util/summoner_api_util';

export default ({getState, dispatch}) => next => action => {
  let fetchSummonerSuccess = (summoner) =>
    dispatch(receiveSummoner(summoner));
  switch (action.type) {
    case FETCH_SUMMONER:
      getSummoner(action.summoner, fetchSummonerSuccess);
      return next(action);
    default:
      return next(action);
  }
};
