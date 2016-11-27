export const FETCH_MATCHES = "FETCH_MATCHES";
export const RECEIVE_MATCHES = "RECEIVE_MATCHES";

export const fetchMatches = (summonerId, offset, limit) => ({
  type: FETCH_MATCHES,
  summonerId,
  offset,
  limit
});

export const receiveMatches = matches => ({
  type: RECEIVE_MATCHES,
  matches
});
