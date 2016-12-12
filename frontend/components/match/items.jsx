import React from 'react';

const ItemsList = ({match, currentSummoner}) => {
  const items = [
      currentSummoner.stats.item0, currentSummoner.stats.item1,
      currentSummoner.stats.item2, currentSummoner.stats.item3,
      currentSummoner.stats.item4, currentSummoner.stats.item5
    ];

  const itemPics = () => {
    if (items !== []) {
      return items.map(item => {
        if (item !== 0) {
          return (
            <span
              key={item}
              className="item">
              <img
                alt="ingame items"
                key={item}
                src={`http://ddragon.leagueoflegends.com/cdn/6.23.1/img/item/${item}.png`}/>
            </span>
          );
        }
      });
    }
  };

  return (
    <div className="items">
      <div className="item-lists">
        {itemPics()}
      </div>
    </div>
  );
};

export default ItemsList;
