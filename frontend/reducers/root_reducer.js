import {combineReducer} from 'redux';
import PlayerReducer from './player_reducer';

export default combineReducer({
  players: PlayerReducer
});
