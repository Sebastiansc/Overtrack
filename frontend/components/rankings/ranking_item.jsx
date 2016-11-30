import React from 'react';
import { Link } from 'react-router';

const RankingItem = ({ entry, idx, tier }) => {
  const winRatio =(wins, losses) => wins / (wins + losses) * 100;
  return(
    <div>
      <ul>
        <li>{idx}</li>
        <li>{entry.playerOrTeamName}</li>
        <li>{entry.leaguePoints}</li>
        <li>{tier}</li>
        <li>{winRatio(entry.wins, entry.losses)}</li>
        <li>{entry.division}</li>
      </ul>
    </div>
  );
};

export default RankingItem;
