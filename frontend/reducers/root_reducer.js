import { combineReducers } from 'redux';
import PlayerReducer from './summoner_reducer';
import MatchReducer from './match_reducer';
import ErrorReducer from './error_reducer';

export default combineReducers({
  summoner: PlayerReducer,
  matches: MatchReducer,
  error: ErrorReducer
});
