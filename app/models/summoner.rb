class Summoner < ApplicationRecord
  validates :name, :level, :summoner_id, :profile_icon, :tier, :wins, :loses, :league_points, :league_name, :division, presence: true
end
