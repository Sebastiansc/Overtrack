import { RECEIVE_RANKINGS } from '../actions/ranking_actions';
import merge from 'lodash/merge';

const _defaultState = {
  solo_5x5: {},
  team_5x5: {},
  team_3x3: {},
  flex_sr: {},
  flex_tt: {}
};

// Current config removes all previos rankings from state. Ranking info will
// persist on HTML. Edge cases where all ranks are required may arise.
// Solution if they do: Push to the end of each queue type the new players
// received for it. This might add some unnecessary computations so
// implementation will wait until is absolutely necessary
export default (state = _defaultState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_RANKINGS:
    debugger;
      return action.rankings;
    default:
      return state;
  }
};
