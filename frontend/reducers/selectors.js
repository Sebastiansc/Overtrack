import { values } from 'lodash';

// building tier_division (ex. PLATINUM_VI)
export const parseQueue = (queues, queueType) => (
  [values(queues[queueType])[0], values(queues[queueType])[4]]
    .join("_")
    .toLowerCase()
);

export const summonerQueues = (summoner) => (
  [values(summoner.solo_5x5), values(summoner.flex_sr),
    values(summoner.team_5x5), values(summoner.team_3x3)]
);
