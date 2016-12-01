export const FETCH_MATCHES = "FETCH_MATCHES";
export const RECEIVE_MATCHES = "RECEIVE_MATCHES";

export const fetchMatches = (name, offset, limit) => ({
  type: FETCH_MATCHES,
  name,
  offset,
  limit
});

export const receiveMatches = matches => ({
  type: RECEIVE_MATCHES,
  matches
});
