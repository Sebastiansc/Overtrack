import React from 'react';
import { Link } from 'react-router';

const RankingItem = ({ entry, idx, tier, queue }) => {
  const name = () => {
    if (queue.includes("TEAM")){
      return(
        <span className='name'>{entry.playerOrTeamName}</span>
      );
    } else {
      return(
        <Link to={`/profile/${entry.playerOrTeamName}`}
              target='_blank'
              className='name name-link'>{entry.playerOrTeamName}
        </Link>
      );
    }
  };

  const winRatio = (wins, losses) => Math.floor(wins / (wins + losses) * 100);
  const winRatioBar =(wins, losses) =>(
    <li className='winRatio'>
      <div className='wins' style={{width: `${winRatio(wins,losses)}%`}}>
        <span>{wins}</span>
      </div>
      <div className='losses'
          style={{width: `${100 - winRatio(wins,losses)}%`}}>
        <span>{losses}</span>
      </div>
      <span>{`${winRatio(wins, losses)}%`}</span>
    </li>
  );

  return(
    <div className='ranking-item'>
      <ul>
        <li>
          <span className='spot'>{idx}</span>
          {name()}
        </li>
        <li>{entry.leaguePoints}</li>
        <li>{tier[0].toUpperCase().concat(tier.slice(1,tier.length))}</li>
        {winRatioBar(entry.wins, entry.losses)}
      </ul>
    </div>
  );
};

export default RankingItem;

// Yet to have access to profileIcon information. Changes to DB will be
// necessary for this feature
