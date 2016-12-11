import React from 'react';

const Champion = ({match, currentSummoner}) => {
  const championName = match.champions[currentSummoner.champion_id].name;
  const championPng = match.champions[currentSummoner.champion_id].image;
  return (
    <div className="champ">
      <div className="champion-info">
        <img
          className="champion-image"
          alt="champion image"
          src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${championPng}`}>
        </img>
        <div className="masteries">
          <div className="spell" style={{backgroundImage: `url('http://ddragon.leagueoflegends.com/cdn/6.23.1/img/spell/${match.spells[currentSummoner.spell1_id].image_name}')`}}>
          </div>
          <div className="spell" style={{backgroundImage: `url('http://ddragon.leagueoflegends.com/cdn/6.23.1/img/spell/${match.spells[currentSummoner.spell2_id].image_name}')`}}>
          </div>
        </div>
      </div>
      <div className="champion-name" >
        {championName}
      </div>
    </div>
  );
};

export default Champion;
