import React from 'react';
import { values } from 'lodash';
import ItemsList from '../match/items';
import Stats from '../match/stats';
import Champion from '../match/champion';
import Kda from '../match/kda';
import Performance from '../match/performance';
import Summoners from '../match/summoners';
import Details from '../match/detail_info';

const MatchListItem = ({match, summoner}) => {
  let currentSummoner;
  let trinket;

  const findSummoner = () => {
    currentSummoner = match.participants[summoner.summoner_id];
  };

  const updateTrinket = () => {
    trinket = currentSummoner.stats.item6;
  };

  const isWinner = () => {
    findSummoner();
    updateTrinket();
    return currentSummoner.stats.winner ? "victory" : "defeat";
  };

  // hide and show match details using jQuery
  const toggleExtendBox = () => {
    let detailContent = $(".detail-content");
    $(document).ready( () => {
      $(".extendbox-button").click(e => {
        $(e.target).removeClass("hidden");
      });
    });
  };

  const timeStamp = () => {
    let now = new Date().getTime();
    let timeDiff = new Date(now - match.match_creation).toString();
  };

  return (
    <div className="match-container">
      <div className={`game-match ${isWinner()}`}>
        <div className="content-match">
          <Stats
            currentSummoner={currentSummoner}
            winner={isWinner}
            match={match} />
          <Champion
            match={match}
            currentSummoner={currentSummoner}/>
          <Kda
            currentSummoner={currentSummoner}/>
          <Performance
            match={match}
            currentSummoner={currentSummoner}/>
          <ItemsList
            match={match}
            currentSummoner={currentSummoner}/>
          <div className="trinkets">
            <span
              className="item">
              <img
                alt="trinket"
                src={`http://ddragon.leagueoflegends.com/cdn/6.23.1/img/item/${trinket}.png`}/>
            </span>
          </div>
          <Summoners
            match={match}
            currentSummoner={currentSummoner}/>
          <div className="extendbox-button" onClick={toggleExtendBox}>
            <i className="fa fa-caret-square-o-down fa-2x" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <Details/>
    </div>
  );
};

export default MatchListItem;
