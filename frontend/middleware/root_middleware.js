import { applyMiddleware } from 'redux';
import SummonerMiddleware from './summoner_middleware';
import MatchMiddleware from './match_middleware';
import RankingMiddleware from './ranking_middleware';
import createLogger from 'redux-logger';

const logger = createLogger();

const RootMiddleware = applyMiddleware(
  SummonerMiddleware,
  MatchMiddleware,
  RankingMiddleware,
  logger
);

export default RootMiddleware;
