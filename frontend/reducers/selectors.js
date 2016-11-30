import { values } from 'lodash';

// building tier_division (ex. PLATINUM_VI)
export const summonerSoloQueue = (summoner) => (
  [values(summoner.solo_5x5)[0], values(summoner.solo_5x5)[4]]
    .join("_")
    .toLowerCase()
);
