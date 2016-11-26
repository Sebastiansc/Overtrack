export const UPDATE_PLAYER = 'UPDATE_PLAYER';
export const FETCH_PLAYER = 'FETCH_PLAYER';


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
