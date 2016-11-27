class Summoner < ApplicationRecord
  validates :summoner_id, :tier, :wins, :league_points, :division,
    :league_name, presence: true
  validates :name, :summoner_id, uniqueness: true

  #Primary key must be set so Rails doesn't default to id
  has_many :matchings, primary_key: :summoner_id
  has_many :matches, through: :matchings, source: :match

  extend ApiHelper
  #Fetches and creates summoner from API.
  #Uses URI encoding to account for foreign characters in summoner names.
  def self.create_summoner(summoner_name, region = "na")
    summoner_name = to_ascii(summoner_name)

    encoded_uri = URI.parse(
      URI.encode(
        "https://#{region}.api.pvp.net/api/lol/#{region}/v1.4/summoner/by-name/#{summoner_name}?api_key=#{api_key}"
      )
    )

    profile = HTTParty.get(encoded_uri)
    return false if profile["statusCode"] == 404
    profile = profile.to_h[summoner_name]
    profile_info = {
      summoner_id: profile["id"],
      level: profile["summonerLevel"],
      name: profile["name"],
      profile_icon: profile["profileIconId"]
    }
    @summoner = Summoner.new(profile_info)

    #What is this doing????
    profile_entry = summoner_entry(
    profile["id"],
    region).to_h[profile["id"].to_s]
    solo_rank(profile_entry)

    @summoner.save!
    @summoner
  end

  #Fetches league related info for player.
  def self.summoner_entry(summoner_id, region)
    encoded_uri = URI.parse(
      URI.encode(
        "https://#{region}.api.pvp.net/api/lol/#{region}/v2.5/league/by-summoner/#{summoner_id}/entry?api_key=#{api_key}"
      )
    )
    HTTParty.get(encoded_uri)
  end


  def self.solo_rank(profile_entry)
    profile_entry.each do |profile|
      next unless profile["queue"] == "RANKED_SOLO_5x5"
      @summoner.tier = profile["tier"]
      @summoner.league_name = profile["name"]
      @summoner.wins = profile["entries"].first["wins"]
      @summoner.losses = profile["entries"].first["losses"]
      @summoner.division = profile["entries"].first["division"]
      @summoner.league_points = profile["entries"].first["leaguePoints"]
    end
  end

  def win_ratio(win, loss)
    win / (win + loss)
  end
end
