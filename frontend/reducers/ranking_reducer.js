import { RECEIVE_RANKINGS } from '../actions/ranking_actions';
import merge from 'lodash/merge';
import {values} from 'lodash';

const _defaultState = {
  solo_5x5: {},
  team_5x5: {},
  team_3x3: {},
  flex_sr: {},
  flex_tt: {}
};

const mergeRankings = (oldRankings, newRankings) => {
  if(!oldRankings["solo_5x5"].entries) return newRankings;
  Object.keys(newRankings).forEach(key => {
    oldRankings[key].entries =
     oldRankings[key].entries.concat(newRankings[key].entries);
  });
  return oldRankings;
};

export default (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_RANKINGS:
      newState = mergeRankings(newState, action.rankings);
      window.newState = newState;
      return newState;
    default:
      return state;
  }
};
