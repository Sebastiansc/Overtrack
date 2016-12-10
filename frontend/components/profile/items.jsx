import React from 'react';

const ItemsList = ({match, summoner}) => {
  const items = [
      summoner.stats.item0, summoner.stats.item1, summoner.stats.item2,
      summoner.stats.item3, summoner.stats.item4, summoner.stats.item5
    ];

  const itemPics = () => {
    return items.forEach(item => {
      if (!item) {
        return <div className="items" style={{backgroundImage: `url('http://ddragon.leagueoflegends.com/cdn/6.23.1/img/item/${item}.png ')`}}></div>;
      }
    });
  };

  return (
    <div className="item-lists">
      { itemPics() }
    </div>
  );
};

export default ItemsList;
