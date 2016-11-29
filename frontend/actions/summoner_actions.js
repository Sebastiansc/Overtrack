export const FETCH_SUMMONER = 'FETCH_SUMMONER';
export const RECEIVE_SUMMONER = 'RECEIVE_SUMMONER';

export const fetchSummoner = (summoner) => ({
  type: FETCH_SUMMONER,
  summoner
});

export const receiveSummoner = (summoner) => ({
  type: RECEIVE_SUMMONER,
  summoner
});
