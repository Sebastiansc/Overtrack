class Summoner < ApplicationRecord
  validates :name, :level, :summoner_id, :profile_icon, :tier, :wins,
   :league_points, :division, :league_name, presence: true
  validates :name, :summoner_id, uniqueness: true

  extend ApiHelper
  def self.create_summoner(summoner_name, region = "na")
    profile = HTTParty.get(
      "https://#{region}.api.pvp.net/api/lol/#{region}/v1.4/summoner/by-name/#{summoner_name}?api_key=#{api_key}"
    )
    profile_entry = summoner_entry(profile[summoner_id], region)
    profile_info = {
      summoner_id: profile["id"],
      level: profile["summonerLevel"],
      name: profile["name"],
      profile_icon: profile["profile_icon_id"]
    }
    @summoner = Summoner.new(profile_info)
    solo_rank(profile_entry)
  end

  def self.summoner_entry(summoner_id, region)
    HTTParty.get(
      "https://#{region}.api.pvp.net/api/lol/#{region}/v2.5/league/by-summoner/#{summoner_id}entry?api_key=#{api_key}"
    )
  end

  def self.solo_rank(profile_entry)
    profile_entry.each do |profile|
      next unless profile.queue == "RANKED_SOLO_5x5"
      @summoner.tier = profile["tier"]
      @summoner.league_name = profile["name"]
      @summoner.wins = profile["entries"].first["wins"]
      @summoner.loses = profile["entries"].first["losses"]
      @summoner.division = profile["entries"].first["division"]
      @summoner.league_points = profile["entries"].first["leaguePoints"]
    end
  end

  def win_ratio(win, loss)
    win / (win + loss)
  end
end
