import React from 'react';

const Performance = ({match, currentSummoner}) => {
  const creepKills = () => {
    let minionKills = 0;
    let jungleKills = 0;
    if (currentSummoner.stats.minionsKilled) {
      minionKills += currentSummoner.stats.minionsKilled;
    }
    if (currentSummoner.stats.neuturalMinionsKilled) {
      jungleKills += currentSummoner.stats.neuturalMinionsKilled;
    }
    return minionKills + jungleKills;
  };

  const wardCounts = () => {
    let greenWards = 0;
    let pinkWards = 0;
    if (currentSummoner.stats.visionWardsBoughtInGame) {
      pinkWards += currentSummoner.stats.visionWardsBoughtInGame;
    }
    if (currentSummoner.stats.wardsPlaced) {
      greenWards += currentSummoner.stats.wardsPlaced;
    }
    return (
      <div className="cs">
        <h4>{greenWards}</h4> &nbsp;wards&nbsp; <h4>{pinkWards}</h4>&nbsp;pinks
      </div>
    );
  };

  const killParticipation = () => {
    let totalKills = 0;
    let participants = match.participants;
    let myStats = currentSummoner.stats;
    let myKillsAssists = myStats.kills + currentSummoner.stats.assists;

    for (let key in participants) {
      if (myStats.team_id === participants[key].stats.team_id) {
        totalKills += participants[key].stats.kills;
      }
    }
    return  Math.round(myKillsAssists * 100 / totalKills);
  };

  return (
    <div className="performance">
      <div className="lvl">
        Level: &nbsp; <h4>{currentSummoner.stats.champLevel}</h4>
      </div>
      <div className="cs">
        <h4>{creepKills()}</h4> &nbsp; CS
      </div>
      {wardCounts()}
      <div className="kill-participation">
        P/Kills {killParticipation()} %
      </div>
    </div>
  );
};

export default Performance;
