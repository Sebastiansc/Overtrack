import React from 'react';
import { values } from 'lodash';

const MatchListItem = ({match, summoner}) => {
  // need json
  debugger
  const currentSummoner = match.participants[summoner];
  const championName = currentSummoner.champion_id;
  const winner = () => {
    debugger;
    return match.participants[summonerId].stats.winner ? "Victory" : "Defeat";
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

  return (
    <div className="game-match">
      <div className="content">
        <div className="stats">
          <div className="queue-type">
            Ranked Game
          </div>
          <div className="timestamp">
            {match.match_creation}
          </div>
          <div className="bar"></div>
          <div className="game-result">
            {winner()}
          </div>
          <div className="match-duration">
            {match.match_duration % 60}m
            {match.match_duration / 60}s
          </div>
        </div>
        <div className="champ">
          <div className="champion-image" style={{backgroundImage: `url('http://ddragon.leagueoflegends.com/cdn/6.23.1/img/champion/${currentSummoner.champion_id}.png')`}}>
          </div>
          <div className="masteries">
            <div className="spell">
              {currentSummoner.spell1_id}
            </div>
            <div className="spell">
              {currentSummoner.spell2_id}
            </div>
          </div>
          <div className="champion-name">
            {currentSummoner.champion_id}
          </div>
        </div>
        <div className="kda">
          <div className="kda">
            {currentSummoner.stats.kills}
            / {currentSummoner.stats.deaths}
            / {currentSummoner.stats.assists}
          </div>
          <div className="kda-ratio">
            { Math.round(
              (parseInt(currentSummoner.stats.kills)
              + parseInt(currentSummoner.stats.assists)) * 10000
              / parseInt(currentSummoner.stats.deaths)
            ) / 100 }:1 KDA
          </div>
        </div>
        <div className="performance">
          <div className="lvl">
            {currentSummoner.stats.champLevel}
          </div>
          <div className="cs">
            {currentSummoner.stats.minionsKilled
              + currentSummoner.stats.neuturalMinionsKilled} CS
          </div>
          <div className="ward">
            {currentSummoner.stats.visionWardsBoughtInGame} Pink wards +
            {currentSummoner.stats.wardsPlaced} wards
          </div>
          <div className="kill-participation">

          </div>
        </div>
        <div className="items">
          <div className="item-lists">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="trinkets">
          <div className="item"></div>
        </div>
        <div className="fellowSummoners">
          <div className="team"></div>
          <div className="team"></div>
        </div>
        <div className="extendbox-button" onClick={toggleExtendBox}>gg</div>
      </div>
      <div className="detail-content">
        <div className="game-detail-wrapper">
          <table className="detail-table">
            <thead className="head">
              <tr className="row">
                <th className="column"></th>
                <th className="column">Item</th>
                <th className="column">KDA</th>
                <th className="column">Damage</th>
                <th className="column">Wards</th>
                <th className="column">CS</th>
                <th className="column">Gold</th>
                <th className="column">Tier</th>
              </tr>
            </thead>
            <tbody className="body">
              <tr className="row">
                <td className="champ-image"></td>
                <td className="summoner-spells"></td>
                <td className="mastery"></td>
                <td className="summoner-name"></td>
                <td className="items"></td>
                <td className="KDA"></td>
                <td className="damage"></td>
                <td className="wards"></td>
                <td className="gold"></td>
                <td className="tier"></td>
              </tr>
            </tbody>
          </table>
          <div className="summary"></div>
          <table className="detail-table">
            <thead className="head">
              <tr className="row">
                <th className="column"></th>
                <th className="column"></th>
                <th className="column"></th>
                <th className="column"></th>
                <th className="column"></th>
                <th className="column"></th>
                <th className="column"></th>
                <th className="column"></th>
              </tr>
            </thead>
            <tbody className="body">
              <tr className="row">
                <td className="champ-image"></td>
                <td className="summoner-spells"></td>
                <td className="mastery"></td>
                <td className="summoner-name"></td>
                <td className="items"></td>
                <td className="KDA"></td>
                <td className="damage"></td>
                <td className="wards"></td>
                <td className="gold"></td>
                <td className="tier"></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default MatchListItem;
