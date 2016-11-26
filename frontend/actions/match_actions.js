export const FETCH_MATCH_LIST = "FETCH_MATCH_LIST";
export const RECEIVE_MATCHES = "RECEIVE_MATCHES";

export const fetchMatchList = (summonerId, offset, limit) => ({
  type: FETCH_MATCH_LIST,
  summonerId,
  offset,
  limit
});

export const receiveMatches = matches => ({
  type: RECEIVE_MATCHES,
  matches
});
