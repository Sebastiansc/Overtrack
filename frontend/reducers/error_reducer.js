import { RECEIVE_ERRORS } from '../actions/error_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.error;
    default:
      return state;
  }
};
