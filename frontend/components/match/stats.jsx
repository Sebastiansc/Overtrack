import React from 'react';

const Stats = ({currentSummoner, winner, match}) => {

  const winnerFontColor = () => {
    if (winner() === "victory") {
      return <div className="winner">Victory</div>;
    } else {
      return <div className="loser">Defeat</div>;
    }
  };

  const matchDuration = () => {
    return (
      <div className="match-duration">
        {Math.round(match.match_duration / 60)} mins~
        <p>Match duration</p>
      </div>
    );
  };

  const timestamp = () => {
    let currentDate = new Date();
    let currentEpoch = currentDate.getTime();
    let matchCreatedAt = match.match_creation;
    let timeDifference = currentEpoch - matchCreatedAt;
    let minutes = 1000 * 60;
    let hours = minutes * 60;
    let days = hours * 60;
    let months = days * 30;
    let matchHappenedAgo;

    if (Math.round(timeDifference / months) === 0) {
      if (Math.round(timeDifference / days) === 0) {
        if (Math.round(timeDifference / hours) === 1 &&
            Math.round(timeDifference / minutes) < 45) {
          matchHappenedAgo = `an hour ago`;
        }
        matchHappenedAgo = `${Math.round(timeDifference / hours)} hours ago`;
      } else {
        matchHappenedAgo = `${Math.round(timeDifference / days)} days ago`;
        if (matchHappenedAgo === 1) {
          matchHappenedAgo = 'a day ago';
        }
      }
    } else {
      matchHappenedAgo = `${Math.round(timeDifference / months)} months ago`;
    }

    return (
      <div className="timestamp">{matchHappenedAgo}</div>
    );
  };

  return (
    <div className="stats">
      <div className="queue-type">
        Ranked Game
        <p>Match type</p>
      </div>
      {timestamp()}
      {winnerFontColor()}
      {matchDuration()}
    </div>
  );
};

export default Stats;
