export const getSummoner = (summoner, success, error) => {
  $.ajax({
    url: `/api/summoners/${summoner}`,
    success,
    error
  });
};
