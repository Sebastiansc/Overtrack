import React from 'react';

const Details = (props) => {
  return (
    <div className="detail-content hidden">
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

  );
};

export default Details;
