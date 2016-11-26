import { RECEIVE_MATCHES } from '../actions/match_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_MATCHES:
      return action.matches;
    default:
      return state;
  }
};
