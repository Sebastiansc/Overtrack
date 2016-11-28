export const UPDATE_SUMMONER = 'UPDATE_SUMMONER';
export const FETCH_SUMMONER = 'FETCH_SUMMONER';


export const updateSummoner = (platform, region, summoner) => ({
  type: UPDATE_SUMMONER,
  region,
  platform,
  summoner
});

export const fetchPlayer = (region, platform, summoner) => ({
  type: FETCH_SUMMONER,
  region,
  platform,
  summoner
});
