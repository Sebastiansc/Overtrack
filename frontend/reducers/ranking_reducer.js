import { RECEIVE_RANKING } from '../actions/ranking_actions';
import merge from 'lodash/merge';

const _defaultState = {
  solo_5x5: {},
  team_5x5: {},
  team_3x3: {},
  flex_sr: {},
  flex_tt: {}
};

export default (state = _defaultState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_RANKING:
      return action.ranking;
    default:
      return state;
  }
};
