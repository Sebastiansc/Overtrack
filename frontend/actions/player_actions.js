import UPDATE_PLAYER from 'UPDATE_PLAYER';
import FETCH_PLAYER from 'FETCH_PLAYER';


export const updatePlayer = (platform, region, player) => ({
  type: UPDATE_PLAYER,
  region,
  platform,
  player
});

export const fetchPlayer = (region, platform, player) => ({
  type: FETCH_PLAYER,
  region,
  platform,
  player
});
