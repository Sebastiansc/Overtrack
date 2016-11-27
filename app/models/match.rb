require 'date'

class Match < ApplicationRecord
  validates :region, :match_type, :match_id, :match_creation, :participants, presence: true
  store_accessor :participants

  has_many :matchings
  has_many :summoners, through: :matchings, source: :summoner
  extend ApiHelper

  #Fetches matches for a specific summoner.
  #Recommended 20 at a time.
  def self.get(id, limit, offset)
    summoner = Summoner.find(id)
    Matches.where(summoner_id: id).offset(offset).limit(limit)
  end

  def self.fetch_matches(summoner)
    begin_time = DateTime.parse((DateTime.now - 30).to_s).to_time.to_i
    end_time = DateTime.parse(DateTime.now.to_s).to_time.to_i
    match_list = HTTParty.get(
      "https://na.api.pvp.net/api/lol/na/v2.2/matchlist/by-summoner/#{summoner.summoner_id}?seasons=SEASON2016&beginTime=#{begin_time}&endTime=#{end_time}&api_key=#{api_key}"
    )
    create_matches(match_list["matches"])
  end

  def self.create_matches(match_list)
    return if match_list.empty?
    match_info = HTTParty.get(
      "https://na.api.pvp.net/api/lol/na/v2.2/match/#{match_list.first["matchId"]}?api_key=#{api_key}"
    )
    if match_info["statusCode"] == 429
      sleep 1
      create_matches(match_list)
    else
      Match.create!({
        region: match_info["region"],
        match_type: match_info["matchType"],
        match_id: match_info["matchId"],
        match_duration: match_info["matchDuration"]
        match_creation: match_info["matchCreation"],
        participants: shapeParticipants(match_info)
      })
      match_list.shift
      create_matches(match_list)
    end
  end

  def shapeParticipants(match)
    participants = []
    identities = shapeIdentities(match)
    match["participants"].each do |participant|
      shapedParticipant = {
        champion_id: participant["championId"],
        team_id: participant["teamId"],
        spell1_id: participant["spell1Id"],
        spell2_id: participant["spell2Id"],
        win: participant["win"],
        stats: participant["stats"],
        summoner: identities[participant.participantId]
      }
      participants << shapedParticipant
    end
    participants;
  end

  #Participant identities are passed in an array.
  #Changes it to a hash where each key is the participant id
  def self.shapeIdentities(match)
    hashIdentities = {};
    match["participantIdentities"].each do |identity|
      hashIdentities[identity.participantId] = identity["player"]
    end
    hashIdentities
  end
end
