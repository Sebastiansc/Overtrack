require 'task_helpers/summoner_helper'

namespace :summoner do
  desc "fetch and update static summoner data"
  task static: :environment do
    queue = Summoner.all.to_a
    create_update_summoner(queue)
  end

  def create_update_summoner(queue)
    return if queue.empty?
    summoner = queue.first
    summoner_name = SummonerApiHelper.to_ascii(summoner)

    profile = HTTParty.get(encoded_uri(summoner_name))
    return false if profile["statusCode"] == 404

    if profile["statusCode"] == 429
      sleep 1
    else
      profile = profile.to_h[summoner_name]
      profile_info = {
        level: profile["summonerLevel"],
        name: profile["name"],
        profile_icon: profile["profileIconId"]
      }
      summoner.update_attributes(profile_info)
      queue.shift
    end

    create_update_summoner(queue)
  end

  def encoded_uri(name)
    URI.encode(
      "https://#{SummonerApiHelper.region}.api.pvp.net/api/lol/#{SummonerApiHelper.region}/v1.4/summoner/by-name/#{summoner_name}?api_key=#{SummonerApiHelper.api_key}"
    )
  end  
end
