import { applyMiddleware } from 'redux';
import PlayerMiddleware from './player_middleware';
import createLogger from 'react-logger';

const logger = createLogger();

const RootMiddleware = applyMiddleware(
  PlayerMiddleware,
  logger
);

export default RootMiddleware;
