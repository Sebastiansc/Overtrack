import { applyMiddleware } from 'redux';
import SummonerMiddleware from './summoner_middleware';
import createLogger from 'react-logger';

const logger = createLogger();

const RootMiddleware = applyMiddleware(
  SummonerMiddleware,
  logger
);

export default RootMiddleware;
