json.array! @matches do |match|
  json.partial! partial: 'api/matches/show', locals: {match: match}
  json.set! :champions do
    @champions.each do |champion|
      json.set! champion.champion_id do
        json.extract! champion, :name, :champion_id, :image
      end
    end
  end
end
