extends Apihelper

namespace :fetcher do
  namespace :summoner do
    desc "fetch and update static summoner data"
    task static: :environment do
      @summoners = Summoner.all

      queue = Array.new();
      @summoners.each do |summoner|
        queue.push(summoner)
      end

      return [] if queue.length == 0

      summoner = queue.shift
      summoner_name = to_ascii(summoner)

      encoded_uri = URI.parse(
      URI.encode(
      "https://#{region}.api.pvp.net/api/lol/#{region}/v1.4/summoner/by-name/#{summoner_name}?api_key=#{api_key}"
      )
      )
      profile = HTTParty.get(encoded_uri)
      return false if profile["statusCode"] == 404
      profile = profile.to_h[summoner_name]
      profile_entry = summoner_entry(profile["id"], region).to_h[profile["id"].to_s]
      profile_info = {
        summoner_id: profile["id"],
        level: profile["summonerLevel"],
        name: profile["name"],
        profile_icon: profile["profileIconId"]
      }
    end

    def queue()
    end
  end
end
