import React, { PropTypes } from 'react';

const Kda = ({currentSummoner}) => {
  const calculateKillDeathsRatio = () => {
    let kda = 0;
    if (currentSummoner.stats.deaths === 0) {
      return "Perfect Score";
    } else {
      kda = Math.round(
        ((currentSummoner.stats.kills
          + currentSummoner.stats.assists) * 100)
          / currentSummoner.stats.deaths
        ) / 100;
    }
    return `${kda}:1 KDA`;
  };

  return (
    <div className="kda">
      <div className="killdeaths">
        {currentSummoner.stats.kills} / {currentSummoner.stats.deaths} / {currentSummoner.stats.assists}
      </div>
      <div className="kda-ratio">
        {calculateKillDeathsRatio()}
      </div>
    </div>
  );
};

export default Kda;
