export const fetchMatches = (summonerId, offset, limit, success, error) => {
  $.ajax({
    url: `/api/matches/${summonerId}/${offset}/${limit}`,
    success,
    error
  });
};
