import React from 'react';

const Summoners = ({match, currentSummoner}) => {
  const allies = [];
  const enemies = [];
  const summoners = match.participants;
  let summoner;
  for (let summonerId in summoners) {
    summoner = match.participants[summonerId];
    if (currentSummoner.team_id === summoner.team_id) {
      allies.push(summoner);
    } else {
      enemies.push(summoner);
    }
  }

  const renderChampionImage = (champId, playerName) => {
    const championPng = match.champions[champId].image;
    const championName = match.champions[champId].name;

    return (
      <span>
        <img
        className="fellowSummonersChampion"
        alt="fellow summoners champion image"
        src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${championPng}`}>
        </img>
        <Link
          to={`/profile/${playerName}`}>{playerName}
        </Link>
      </span>
    );
  };

  const renderSummoners = (summonersList) => (
    summonersList.forEach(player =>
      renderChampionImage(player.champion_id, player.summoner.summonerName)
    )
  );

  return (
    <div className="fellowSummoners">
      <div className="team">
        {renderSummoners(allies)}
      </div>
      <div className="team">
        {renderSummoners(enemies)}
        <span>
          <img
            className="fellowSummonersChampion"
            alt="fellow summoners champion image"
            src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Ahri.png`}>
          </img>
          &nbsp; Ahri
        </span>
      </div>
    </div>
  );
};

export default Summoners;
