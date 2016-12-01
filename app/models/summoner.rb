class Summoner < ApplicationRecord
  validates :summoner_id, :profile_icon, :level, :name, presence: true
  validates :name, :summoner_id, uniqueness: true

  #Primary key must be set so Rails doesn't default to id
  has_many :matchings, primary_key: :summoner_id, dependent: :destroy
  has_many :matches, through: :matchings, source: :match

  extend ApiHelper
  #Fetches and creates summoner from API.
  #Uses URI encoding to account for foreign characters in summoner names.
  def self.create_summoner(summoner_name)
    summoner_name = to_ascii(summoner_name)
    profile = static_data(summoner_name)
    return false if profile.response.code == "404"
    profile = profile.to_h[summoner_name]
    profile_info = {
      summoner_id: profile["id"],
      level: profile["summonerLevel"],
      region: region,
      name: profile["name"],
      profile_icon: profile["profileIconId"]
    }

    summoner = Summoner.new(profile_info)
    solo_rank(summoner)
    summoner
  end

  #Fetches slow updating summoner
  def self.static_data(name)
    encoded_uri = URI.parse(
      URI.encode(
        "https://#{region}.api.pvp.net/api/lol/#{region}/v1.4/summoner/by-name/#{name}?api_key=#{api_key}"
      )
    )
    HTTParty.get(encoded_uri)
  end

  #Fetches league related info for player.
  #Some summoners might exist but have no league_entries
  def self.league_entries(summoner)
    id = summoner.summoner_id
    encoded_uri = URI.parse(
      URI.encode(
        "https://#{region}.api.pvp.net/api/lol/#{region}/v2.5/league/by-summoner/#{id}/entry?api_key=#{api_key}"
      )
    )
    HTTParty.get(encoded_uri).to_h[id.to_s]
  end

  #Fills summoner's information for each queue_type and saves to DB
  def self.solo_rank(summoner)
    entries = league_entries(summoner)

    unless entries
      summoner.save
      return true
    end

    entries.each do |entry|
      queue = queue_key(entry["queue"])
      summoner[queue]["tier"] = entry["tier"]
      summoner[queue]["league_name"] = entry["name"]
      summoner[queue]["wins"] = entry["entries"].first["wins"]
      summoner[queue]["losses"] = entry["entries"].first["losses"]
      summoner[queue]["division"] = entry["entries"].first["division"]
      summoner[queue]["league_points"] = entry["entries"].first["leaguePoints"]
    end

    summoner.save
  end

  #Returns the appropiate model key for acccesing the queue row
  def self.queue_key(queue_type)
    if solo_rank?(queue_type)
      :solo_5x5
    elsif queue_type == "RANKED_FLEX_SR"
      :flex_sr
    elsif queue_type == "RANKED_TEAM_5x5"
      :team_5x5
    else
      :team_3x3
    end
  end

  def self.solo_rank?(queue_type)
    queue_type.include?("TEAM_BUILDER") ||
    queue_type == "RANKED_SOLO_5x5"
  end
end
