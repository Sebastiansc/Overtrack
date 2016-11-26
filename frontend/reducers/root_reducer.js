import {combineReducer} from 'redux';
import PlayerReducer from './player_reducer';
import MatchReducer from './match_reducer';

export default combineReducer({
  players: PlayerReducer,
  matches: MatchReducer
});
