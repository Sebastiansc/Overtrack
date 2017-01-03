import React from 'react';
import { Link } from 'react-router';

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
    if (match.champions[champId] === undefined) debugger;

    const championPng = match.champions[champId].image;
    const championName = match.champions[champId].name;

    return (
      <Link
        key={champId}
        to={`/profile/${playerName}`}>
        <img
          className="fellowSummonersChampion"
          alt="fellow summoners champion image"
          src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${championPng}`}>
        </img>
        <h4>{playerName}</h4>
      </Link>
    );
  };

  const renderSummoners = (summonersList) => (
    summonersList.map(player =>
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
      </div>
    </div>
  );
};

export default Summoners;
