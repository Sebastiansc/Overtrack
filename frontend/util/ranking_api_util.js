export const fetchRankings = (tier, success, error) => {
  $.ajax({
    url: `/api/rankings/${tier}`,
    success,
    error
  });
};
