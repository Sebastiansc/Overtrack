import React from 'react';
import { Link } from 'react-router';

const RankingItem = ({ entry, idx, tier }) => {
  const winRatio =(wins, losses) => wins / (wins + losses) * 100;
  return(
    <div className='ranking-item'>
      <ul>
        <li>
          <span>{idx}</span>
          <Link to={`/profile/${entry.playerOrTeamName}`}
                target='_blank'
                className='name'>{entry.playerOrTeamName}
          </Link>
        </li>
        <li>{entry.leaguePoints}</li>
        <li>{tier}</li>
        <li>{winRatio(entry.wins, entry.losses)}</li>
        <li>{entry.division}</li>
      </ul>
    </div>
  );
};

export default RankingItem;

// Yet to have access to profileIcon information. Changes to DB will be
// necessary for this feature
