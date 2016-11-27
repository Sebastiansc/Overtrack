export const fetchMatchList = (summonerId, offset, limit, success, error) => {
  $.ajax({
    url:`https://na.api.pvp.net/api/lol/na/v2.2/matchlist/by-summoner/${summonerId}?beginIndex=${offset}&endIndex=${limit}&api_key=a4b014b5-fb9a-4be0-987e-8b423439da37`,
    success,
    error
  });
};

export const fetchMatch = (matchId, success) => {
  $.ajax({
    url: `https://na.api.pvp.net/api/lol/na/v2.2/match/${matchId}?includeTimeline=false&api_key=a4b014b5-fb9a-4be0-987e-8b423439da37`,
    success
  });
};
