export const fetchSummoner = (summoner, success, errors) => {
  $.ajax({
    url: `/api/summoners/${summoner}`,
    success,
    errors
  });
};
