import { RECEIVE_SUMMONER } from '../actions/summoner_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_SUMMONER:
      return action.summoner;
    default:
      return state;
  }
};
