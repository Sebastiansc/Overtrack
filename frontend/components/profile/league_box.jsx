import React from 'react';
import { parseQueue } from '../../reducers/selectors';

const LeagueBox = ({summoner, queueType, queues, height}) => {
  debugger;
  // finds league medals from local assets/tier-icons folder
  // need refactoring
  const leagueDivision = () => {
    if (queues[queueType].tier) {
      if (queues[queueType].tier !== "CHALLENGER" ||
      queues[queueType].tier !== "MASTER" ||
      queues[queueType].tier !== "PROVISIONAL") {
        if (!parseQueue(queues, queueType)) debugger;
        return (
          <div className="medal"
            style={{backgroundImage: `url('assets/tier-icons/${parseQueue(queues, queueType)}.png')`}}></div>
        );
      } else {
        return (
          <div className="medal"
            style={{backgroundImage: `url('assets/${queues[queueType].tier.toLowerCase()}.png')`}}></div>
        );
      }
    }
  };

  const renderLeagueName = () => {
    if (queues[queueType].tier) {
      return <h2>{queues[queueType].league_name}</h2>;
    }
  };

  const renderLeaguePoints = () => {
    if (queues[queueType].tier) {
      return <h2>{queues[queueType].league_points} LP</h2>;
    }
  };

  const renderWinLoss = () => {
    if (queues[queueType].tier) {
      return (
        <h2>
          | &nbsp;{queues[queueType].wins}W / {queues[queueType].losses}L
        </h2>
      );
    }
  };

  // win ratio round up to 2 decimal places
  const calculateWinRatio = () => {
    return (
      Math.round(
        parseInt(queues[queueType].wins) * 10000 /
      (parseInt(queues[queueType].wins)+parseInt(queues[queueType].losses))
    ) / 100);
  };

  const renderWinRatio = () => {
    if (queues[queueType].tier) {
      return ( <h2>Win Ratio {calculateWinRatio} %</h2>);
    }
  };

  return (
    <div className="sidebar">
      <div className="league-info">
        <div className="solo-tier">
          <div className="medal">
            {
              leagueDivision()
            }
          </div>
          <div className="tier-info">
            <div className="tier-division">
              {
                parseQueue(queues, queueType)
                  .split("_").map((str, idx) => <h3 key={idx}>{str}</h3>)
              }
            </div>
            <div className="season-stats">
              <div className="lp">
                { renderLeaguePoints() }
              </div>
              <div className="winLoss">
                { renderWinLoss() }
              </div>
            </div>
            <div className="win-ratio">
              { renderWinRatio() }
            </div>
            <div className="league-name">
              { renderLeagueName() }
            </div>
          </div>
        </div>
        <div className="optional-tier"></div>
      </div>
    </div>
  );
};

export default LeagueBox;
