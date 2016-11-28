import {
  FETCH_SUMMONER,
  UPDATE_SUMMONER,
  fetchSummoner,
  updateSummoner
} from '../actions/summoner_actions';

import { getSummoner } from '../util/summoner_api_util';

export default ({getState, dispatch}) => next => action => {
  let fetchSummonerSuccess = (region, platform, summoner) =>
    dispatch(fetchSummoner(region, platform, summoner));

  switch (action.type) {
    case FETCH_SUMMONER:
      getSummoner(
        action.region,
        action.platform,
        action.summoner,
        fetchSummonerSuccess
      );
      return next(action);
    default:
      return next(action);
  }
};
