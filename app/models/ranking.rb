class Ranking < ActiveRecord::Base

  #This functions allows the ranking object to only be instantiated once while getting updated through the recursive calls of #fetch_rankings
  extend ApiHelper

  def self.update_rankings
    @ranking = Ranking.new
    queues = [
      "RANKED_SOLO_5x5",
      "RANKED_FLEX_SR",
      "RANKED_TEAM_5x5",
      "RANKED_TEAM_3x3",
      "RANKED_FLEX_TT"
    ]
    fetch_rankings(queues)
    previos_rankings = Ranking.first
    previos_rankings.destroy if previos_rankings
    @ranking.save
  end

  def self.fetch_rankings(queues)
    return if queues.empty?
    ranking = HTTParty.get(
      "https://na.api.pvp.net/api/lol/na/v2.5/league/challenger?type=#{queues.first}&api_key=#{api_key}"
    )

    if ranking.response.code == 429
      sleep 1
      fetch_rankings(queues)
    else
      create_entry(ranking)
      fetch_rankings(queues[1..-1])
    end
  end

  def self.create_entry(ranking)
    col_name = ranking["queue"].split('_')[1..2].join('_').downcase
    @ranking["#{col_name}"] = sorted_entry(ranking)
  end

  #Sorts the summoners in descending order based on leaguePoints
  def self.sorted_entry(ranking)
    {
      queue: ranking["queue"],
      tier: ranking["tier"],
      entries: ranking["entries"].sort_by{|summoner| -(summoner["leaguePoints"])}
    }
  end
end
