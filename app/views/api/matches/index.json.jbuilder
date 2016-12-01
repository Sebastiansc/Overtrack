json.array! @matches do |match|
  json.partial! partial: 'api/matches/show', locals: {match: match}
  json.set! :champions do
    @champions.each do |champion|
      json.set! champion.champion_id do
        json.extract! champion, :name, :champion_id, :image
      end
    end
  end
  json.set! :spells do
    @spells.each do |spell|
      json.set! spell.spell_id do
        json.extract! spell, :name, :spell_id, :image_name, :cool_down, :description
      end
    end
  end
  json.set! :items do
    @items.each do |item|
      json.set! item.item_id do
        json.extract! item, :name, :item_id, :description
      end
    end
  end
end
