require 'date'

class Match < ApplicationRecord
  validates :region, :match_type, :match_id, :match_creation, :participants, :match_duration, presence: true
  store_accessor :participants

  #Primary key must be set so Rails doesn't default to id
  has_many :matchings, primary_key: :match_id, dependent: :destroy
  has_many :summoners, through: :matchings, source: :summoner
  extend ApiHelper

  #Fetches summoner matches from DB, ordered by most recently played.
  #Signals #fetch_matches to get more matches if requested limit surpasses # of stored matches in DB.
  #Recommended: 20 at a time.
  def self.get(summoner, offset, limit)
    if $redis.get("matches_loaded") == "false"
      sleep 1.5
      get(summoner, offset, limit)
    end

    if limit > summoner.matches.count
      fetch_matches(summoner, offset: offset, limit: limit)
    end
    by_summoner(summoner.summoner_id, offset, limit)
  end

  def self.by_summoner(summoner_id, offset, limit)
    Match.joins(:matchings).
    where('matchings.summoner_id = ?', summoner_id).
    order('matches.match_creation DESC').
    offset(offset).
    limit(limit)
  end

  def self.match_list(options)
    match_list = HTTParty.get(
      "https://na.api.pvp.net/api/lol/na/v2.2/matchlist/by-summoner/#{@summoner_id}?rankedQueues=#{ranks}&seasons=SEASON2016&beginTime=#{begin_time}&endTime=#{end_time}&beginIndex=#{options[:offset]}&endIndex=#{options[:limit]}&api_key=#{api_key}"
    )
  end

  #Fetches and creates matches, played within last month, in batches of 20 from API. **IGNORES matches already stored in DB.
  #Arguments: options => hash. Sets offset and limit.
  def self.fetch_matches(summoner, options)
    @summoner_id = summoner.summoner_id
    match_list = match_list(options)

    if match_list.response.code == "429"
      sleep 1
      fetch_matches(summoner, options)
    #Check if summoner has no match history. Must return tru to comply with SuckerPunch
    end
    if !match_list["matches"] || match_list["totalGames"] == 0
      return true
    end

    create_matches(not_stored_matches(match_list["matches"]))
  end

  #Reduces number of DB queries by computing all match ids that are not already stored. **MIGHT NEED FURTHER OPTIMIZATION
  #Associates summoner to matches that are in DB and will not be fetched
  def self.not_stored_matches(match_list)
    api_match_ids = match_list.map{ |match| match["matchId"] }
    db_match_ids = Match.where(match_id: api_match_ids).map(&:match_id)
    to_fetch_ids = api_match_ids - db_match_ids
    to_fetch_ids
  end

  #Iterates recursively through a queue of matches to only move forward once the response is succesfull
  def self.create_matches(match_ids)
    return if match_ids.empty?

    match_info = HTTParty.get(
      "https://na.api.pvp.net/api/lol/na/v2.2/match/#{match_ids.first}?api_key=#{api_key}"
    )

    if match_info.response.code == "429"
      sleep 1
      create_matches(match_ids)
    else
      create_match(match_info)
      create_matches(match_ids[1..-1])
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
