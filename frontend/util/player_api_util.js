export const getPlayer = (platform, region, player, success) => {
  $.ajax({
    url: `https://api.lootbox.eu/${platform}/${region}/${player}/profile`,
    success
  });
};
