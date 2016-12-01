import React from 'react';

const MatchListItem = (props) => {
  return (
    <div className="matchWrapper">
      <div className="game-match">
        <div className="content">
          <div className="stats"></div>
          <div className="champ"></div>
          <div className="kda"></div>
          <div className="performance"></div>
          <div className="items"></div>
          <div className="trinkets"></div>
          <div className="fellowSummoners"></div>
          <div className="button"></div>
        </div>
        <div className="detail-content"></div>
      </div>
    </div>
  );
};

export default MatchListItem;
