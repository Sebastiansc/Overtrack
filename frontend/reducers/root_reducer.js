import {combineReducer} from 'redux';
import PlayerReducer from './summoner_reducer';
import MatchReducer from './match_reducer';

export default combineReducer({
  players: PlayerReducer,
  matches: MatchReducer
});
