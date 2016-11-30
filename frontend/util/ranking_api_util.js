export const fetchRanking = (tier, success, error) => {
  $.ajax({
    url: `/api/ranking/${tier}`,
    success,
    error
  });
};
