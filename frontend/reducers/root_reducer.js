import { combineReducers } from 'redux';
import PlayerReducer from './summoner_reducer';
import MatchReducer from './match_reducer';

export default combineReducers({
  summoner: PlayerReducer,
  matches: MatchReducer
});
