export const RECEIVE_RANKING = "RECEIVE_RANKING";
export const FETCH_RANKING = "FETCH_RANKING";

export const fetchRanking = tier => ({
  type: "FETCH_RANKING",
  tier
});

export const receiveRanking = ranking => ({
  type: "FETCH_RANKING",
  ranking
});
