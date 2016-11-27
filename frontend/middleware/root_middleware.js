import { applyMiddleware } from 'redux';
import SummonerMiddleware from './summoner_middleware';
import MatchMiddleware from './match_middleware';
import createLogger from 'redux-logger';

const logger = createLogger();

const RootMiddleware = applyMiddleware(
  SummonerMiddleware,
  MatchMiddleware,
  logger
);

export default RootMiddleware;
