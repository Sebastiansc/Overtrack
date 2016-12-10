import React from 'react';

const Champion = ({match, currentSummoner}) => {
  return (
    <div className="champ">
      <div className="champion-info">
        <img
          className="champion-image"
          alt="champion image">
        </img>
        <div className="masteries">
          <div className="spell" style={{backgroundImage: `url('http://ddragon.leagueoflegends.com/cdn/6.23.1/img/spell/${match.spells[currentSummoner.spell1_id].image_name}')`}}>
          </div>
          <div className="spell" style={{backgroundImage: `url('http://ddragon.leagueoflegends.com/cdn/6.23.1/img/spell/${match.spells[currentSummoner.spell2_id].image_name}')`}}>
          </div>
        </div>
      </div>
      <div className="champion-name" >
        {currentSummoner.champion_id}
      </div>
    </div>
  );
};

export default Champion;
