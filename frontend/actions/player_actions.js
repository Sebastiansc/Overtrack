import UPDATE_PLAYER from 'UPDATE_PLAYER';
import FETCH_PLAYER from 'FETCH_PLAYER';


export const updatePlayer = player => ({
  type: UPDATE_PLAYER,
  player
});

export const fetchPlayer = player => ({
  type: FETCH_PLAYER,
  player
});
