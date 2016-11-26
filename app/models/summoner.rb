class Summoner < ApplicationRecord
  validates :name, :level, :summoner_id, :profile_icon, :tier, :wins, :league_points, :division, :league_name, presence: true

end
