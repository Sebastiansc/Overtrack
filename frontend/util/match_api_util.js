export const fetchMatches = (summonerId, offset, limit, success, error) => {
  $.ajax({
    url: `/api/matches/${offset}/${limit}`,
    success,
    error
  });
};
