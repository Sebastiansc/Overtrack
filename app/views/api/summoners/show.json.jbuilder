json.extract! @summoner, :name, :level, :profileIcon, :tier, :wins, :losses, :league_points, :division, :league_name
json.set! :matches do
  @summoner.matches.each do |match|
    json.extract! match, :region, :match_type, :match_id, :match_creation, :participants
  end
end
