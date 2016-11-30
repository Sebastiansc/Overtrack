import { combineReducers } from 'redux';
import PlayerReducer from './summoner_reducer';
import RankingReducer from './ranking_reducer';
import MatchReducer from './match_reducer';
import ErrorReducer from './error_reducer';

export default combineReducers({
  summoner: PlayerReducer,
  matches: MatchReducer,
<<<<<<< HEAD
  rankings: RankingReducer
=======
  error: ErrorReducer
>>>>>>> bc13d29c04a3e879273fa4b3f6c4255e4ebede67
});
