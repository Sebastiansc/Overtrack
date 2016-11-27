require 'date'

class Match < ApplicationRecord
  validates :region, :match_type, :match_id, :match_creation, :participants, presence: true
  store_accessor :participants

  #Primary key must be set so Rails doesn't default to id
  has_many :matchings, primary_key: :match_id, dependent: :destroy
  has_many :summoners, through: :matchings, source: :summoner
  extend ApiHelper

  #Fetches summoner matches from DB, ordered by most recently played.
  #Signals #fetch_matches to get more matches if requested offset + limit surpasses # of stored matches in DB.
  #Recommended: 20 at a time.
  def self.get(summoner_id, limit, offset)
    byebug
    summoner = Summoner.find_by(summoner_id: summoner_id)

    if summoner.matches.length < (offset + limit)
      fetch_matches(summoner, {
          end_time: oldest_match_time(summoner),
          offset: offset,
          limit: limit
        })
    end

    Matches.joins(:matchings).
    where('matchings.summoner_id = ?', summoner_id).
    order('matches.match_creation DESC').
    offset(offset).
    limit(limit)
  end

  #Finds oldest match, timewise, for the summoner. Adds 1 to exclude that match from next batch fetch
  def self.oldest_match_time(summoner)
    summoner.matches.
      order('matches.match_creation').
      limit(1).match_creation + 1
  end

  #Fetches and creates matches, played within last month, in batches of 20 from API. **IGNORES matches already stored in DB.
  #Arguments: options => hash. Sets look up and index offset and limits.
  def self.fetch_matches(summoner, options)
    @summoner_id = summoner.summoner_id

    match_list = HTTParty.get(
      "https://na.api.pvp.net/api/lol/na/v2.2/matchlist/by-summoner/#{@summoner_id}?seasons=SEASON2016&beginTime=#{begin_time}&endTime=#{options[:end_time]}&beginIndex=#{options[:offset]}&endIndex=#{options[:limit]}&api_key=#{api_key}"
    )

    if match_list.response.code == "429"
      sleep 1
      fetch_matches(summoner)
    end
    create_matches(match_list["matches"])
  end

  #Iterates recursively through a queue of matches to only move forward once the response is succesfull
  def self.create_matches(match_list)
    return if match_list.empty?
    currentMatch = match_list.first

    #Check if match is in DB. Many players may share matches
    if Match.find_by(match_id: currentMatch["matchId"])
      match_list.shift
      create_matches(match_list)
    end

    match_info = HTTParty.get(
      "https://na.api.pvp.net/api/lol/na/v2.2/match/#{currentMatch["matchId"]}?api_key=#{api_key}"
    )

    if match_info.response.code == "429"
      sleep 1
      create_matches(match_list)
    else
      create_match(match_info)
      match_list.shift
      create_matches(match_list)
    end
  end

  def self.create_match(match_info)
    Match.create({
      region: match_info["region"],
      match_type: match_info["matchType"],
      match_id: match_info["matchId"],
      match_duration: match_info["matchDuration"],
      match_creation: match_info["matchCreation"],
      participants: shapeParticipants(match_info)
    })
    Matching.create({
      match_id: match_info["matchId"],
      summoner_id: @summoner_id
    })
  end

  #Configures the shape of the participant's hash.
  #Sets it to a hash where each key is a summoner_id and each value is their match related stats.
  def self.shapeParticipants(match)
    participants = {}
    identities = shapeIdentities(match)

    match["participants"].each do |participant|
      shapedParticipant = {
        champion_id: participant["championId"],
        team_id: participant["teamId"],
        spell1_id: participant["spell1Id"],
        spell2_id: participant["spell2Id"],
        stats: participant["stats"],
        summoner: identities[participant["participantId"]]
      }
      participants[shapedParticipant[:summoner]["summonerId"]] = shapedParticipant
    end

    participants;
  end

  #Participant identities are passed in an array.
  #Changes it to a hash where each key is the participant id
  def self.shapeIdentities(match)
    hashIdentities = {};
    match["participantIdentities"].each do |identity|
      hashIdentities[identity["participantId"]] = identity["player"]
    end
    hashIdentities
  end
end
