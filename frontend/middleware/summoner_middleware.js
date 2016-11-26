import {
  FETCH_PLAYER,
  UPDATE_PLAYER,
  fetchPlayer,
  updatePlayer
} from '../actions/summoner_actions';

import { getPlayer } from '../util/summoner_api_util';

export default ({getState, dispatch}) => next => action => {
  let fetchPlayerSuccess = (region, platform, player) =>
    dispatch(fetchPlayer(region, platform, player));

  switch (action.type) {
    case FETCH_PLAYER:
      getPlayer(
        action.region,
        action.platform,
        action.player,
        fetchPlayerSuccess
      );
      return next(action);
    default:
      return next(action);
  }
};
