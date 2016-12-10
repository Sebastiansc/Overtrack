import React from 'react';
import { values } from 'lodash';
import ItemsList from './items';
import Stats from '../match/stats';
import Champion from '../match/champion';
import Kda from '../match/kda';

const MatchListItem = ({match, summoner}) => {
  // need json
  const currentSummoner = match.participants[summoner.summoner_id];
  // const championName = match.champions[currentSummoner.champion_id];
  const isWinner = () => {
    let winnerTeamId = match.participants[summoner.summoner_id].team_id;
    return match.participants[summoner.summoner_id].stats.winner ? "victory" : "defeat"
  };

  const killParticipation = () => {
  };

  // hide and show match details using jQuery
  const toggleExtendBox = () => {
    let detailContent = $(".detail-content");
    $(document).ready( () => {
      detailContent.hide();
      $(".extendbox-button").click(e => {
        $(e.target).next(".detail-content").slideToggle(400);
      });
    });
  };

  const timeStamp = () => {
    let now = new Date().getTime();
    let timeDiff = new Date(now - match.match_creation).toString();
  };

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
    return `${greenWards} wards ${pinkWards} pinks`;
  };

  return (
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
        <div className="performance">
          <div className="lvl">
            Champion Level: {currentSummoner.stats.champLevel}
          </div>
          <div className="cs">
            {creepKills()} CS
          </div>
          <div className="ward">
            {wardCounts()}
          </div>
          <div className="kill-participation">
          </div>
        </div>
        <ItemsList match={match} summoner={currentSummoner}/>
        <div className="trinkets">
          <div className="item"></div>
        </div>
        <div className="fellowSummoners">
          <div className="team"></div>
          <div className="team"></div>
        </div>
        <div className="extendbox-button" onClick={toggleExtendBox}><i className="fa fa-caret-square-o-down fa-2x" aria-hidden="true"></i></div>
      </div>

    </div>
  );
};

export default MatchListItem;
// style={{backgroundImage: `url('http://ddragon.leagueoflegends.com/cdn/6.23.1/img/champion/${championName}.png')`}}
// <div className="detail-content">
//   <div className="game-detail-wrapper">
//     <table className="detail-table">
//       <thead className="head">
//         <tr className="row">
//           <th className="column"></th>
//           <th className="column">Item</th>
//           <th className="column">KDA</th>
//           <th className="column">Damage</th>
//           <th className="column">Wards</th>
//           <th className="column">CS</th>
//           <th className="column">Gold</th>
//           <th className="column">Tier</th>
//         </tr>
//       </thead>
//       <tbody className="body">
//         <tr className="row">
//           <td className="champ-image"></td>
//           <td className="summoner-spells"></td>
//           <td className="mastery"></td>
//           <td className="summoner-name"></td>
//           <td className="items"></td>
//           <td className="KDA"></td>
//           <td className="damage"></td>
//           <td className="wards"></td>
//           <td className="gold"></td>
//           <td className="tier"></td>
//         </tr>
//       </tbody>
//     </table>
//     <div className="summary"></div>
//     <table className="detail-table">
//       <thead className="head">
//         <tr className="row">
//           <th className="column"></th>
//           <th className="column"></th>
//           <th className="column"></th>
//           <th className="column"></th>
//           <th className="column"></th>
//           <th className="column"></th>
//           <th className="column"></th>
//           <th className="column"></th>
//         </tr>
//       </thead>
//       <tbody className="body">
//         <tr className="row">
//           <td className="champ-image"></td>
//           <td className="summoner-spells"></td>
//           <td className="mastery"></td>
//           <td className="summoner-name"></td>
//           <td className="items"></td>
//           <td className="KDA"></td>
//           <td className="damage"></td>
//           <td className="wards"></td>
//           <td className="gold"></td>
//           <td className="tier"></td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
//
// </div>
