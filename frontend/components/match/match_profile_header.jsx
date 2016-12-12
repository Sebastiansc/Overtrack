import React from 'react';

const MatchProfileHeader = ({matches, currentSummoner}) => {
  let kda = {
    totalKill: 0,
    totalDeath: 0,
    totalAssists: 0,
    counter: 0,
    killDeathRatio: 0,
    winCount: 0,
    lossCount: 0
  };
  debugger;
  matches.forEach(match => {
    debugger;
    if (match !== undefined) {
      let summoner = match.participants[currentSummoner.summoner_id];
      kda.totalKill += summoner.stats.kills;
      kda.totalDeath += summoner.stats.deaths;
      kda.totalAssists += summoner.stats.assists;
      kda.counter ++;
      if (summoner.stats.winner) {
        kda.winCount ++;
      }
    }
  });

  const totalKDA = () => {
    let kills = Math.round((kda.totalKill * 10) / kda.counter) / 10;
    let deaths = Math.round((kda.totalDeath * 10) / kda.counter) / 10;
    let assists = Math.round((kda.totalAssists * 10) / kda.counter) / 10;

    return `${kills} / ${deaths} / ${assists}`;
  };

  const totalKDARatio = () => {
    kda.killDeathRatio = (
      Math.round(
        (kda.totalKill + kda.totalAssists) * 100 / (kda.totalDeath)
      ) / 100
    );

    return kda.killDeathRatio;
  };

  const winRatio = () => {
    return Math.round((kda.winCount * 100 )/ kda.counter);
  };

  return (

    <div className="head">
      <div className="recent">Latest Rank Matches</div>
      <div className="head-content">
        <div className="summary">
          <div className="total-KDA">
            <div>{totalKDA()}</div>
            <div>{totalKDARatio()} : 1 KDA</div>
          </div>
          <div className="win-ratio">
            <div></div>
            {winRatio()} %
            <span>
              <div></div>
              <div></div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchProfileHeader;
