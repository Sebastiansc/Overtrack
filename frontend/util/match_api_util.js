export const fetchMatches = (name, offset, limit, success, error) => {
  $.ajax({
    url: `/api/matches/${name}/${offset}/${limit}`,
    success,
    error
  });
};
