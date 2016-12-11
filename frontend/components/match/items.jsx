import React from 'react';

const ItemsList = ({match, summoner}) => {
  const items = [
      summoner.stats.item0, summoner.stats.item1, summoner.stats.item2,
      summoner.stats.item3, summoner.stats.item4, summoner.stats.item5
    ];

  const itemPics = () => {
    if (items !== []) {
      return items.forEach(item => {
        if (item !== 0) {
          debugger;
          return (
            <span><img
              alt="ingame items"
              key={item}
              src={`http://ddragon.leagueoflegends.com/cdn/6.23.1/img/item/${item}.png`}>{item}</img></span>
          );
        }
      });
    }
  };

  return (
    <div className="item-lists">
      <div className="items">
        {itemPics()}
      </div>
    </div>
  );
};

export default ItemsList;
