export const FETCH_SUMMONER = 'FETCH_SUMMONER';

export const fetchSummoner = (region, platform, summoner) => ({
  type: FETCH_SUMMONER,
  region,
  platform,
  summoner
});
