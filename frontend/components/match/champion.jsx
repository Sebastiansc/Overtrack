import React from 'react';

const Champion = ({match, currentSummoner}) => {
  const championName = match.champions[currentSummoner.champion_id].name;
  const championPng = match.champions[currentSummoner.champion_id].image;

  const renderSpell = (spellName) => {
    let spellDesc = match.spells[currentSummoner.spell1_id];
    return (
      <div className="spell">
        <img
          alt={spellName}
          title={spellName}
          src={`http://ddragon.leagueoflegends.com/cdn/6.23.1/img/spell/${spellName}`}></img>
        <div
          className="desc"
          title={spellName}>
          <h1>{spellDesc.name}</h1>
          <p>{spellDesc.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="champ">
      <div className="champion-info">
        <img
          className="champion-image"
          alt={championName}
          src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${championPng}`}>
        </img>
        <div className="masteries">
          {renderSpell(match.spells[currentSummoner.spell1_id].image_name)}
          {renderSpell(match.spells[currentSummoner.spell2_id].image_name)}
        </div>
      </div>
      <div className="champion-name" >
        {championName}
      </div>
    </div>
  );
};

export default Champion;
