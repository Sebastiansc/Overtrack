export const RECEIVE_RANKINGS = "RECEIVE_RANKINGS";
export const FETCH_RANKINGS = "FETCH_RANKINGS";

export const fetchRankings = tier => ({
  type: "FETCH_RANKINGS",
  tier
});

export const receiveRankings = rankings => ({
  type: "RECEIVE_RANKINGS",
  rankings
});
