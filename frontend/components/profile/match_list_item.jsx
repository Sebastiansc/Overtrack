import React from 'react';
import { values } from 'lodash';
import ItemsList from '../match/items';
import Stats from '../match/stats';
import Champion from '../match/champion';
import Kda from '../match/kda';
import Performance from '../match/performance';
import Summoners from '../match/summoners';

const MatchListItem = ({match, summoner}) => {
  // need json
  const currentSummoner = match.participants[summoner.summoner_id];
  const isWinner = () => {
    let winnerTeamId = currentSummoner.team_id;
    return currentSummoner.stats.winner ? "victory" : "defeat";
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
        <Performance
          match={match}
          currentSummoner={currentSummoner}/>
        <ItemsList
          match={match}
          currentSummoner={currentSummoner}/>
        <div className="trinkets">
          <div className="item"></div>
        </div>
        <Summoners
          match={match}
          currentSummoner={currentSummoner}/>
        <div className="extendbox-button" onClick={toggleExtendBox}>
          <i className="fa fa-caret-square-o-down fa-2x" aria-hidden="true">
          </i>
        </div>
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
