require 'task_helpers/summoner_helper'

namespace :items do
  desc "Fetches Spells data from LoL API"
  task update: :environment do
    items = HTTParty.get(
      "https://global.api.pvp.net/api/lol/static-data/na/v1.2/item?api_key=#{SummonerApiHelper.api_key}"
    )
    items["data"].each do |key, info|
      next if !info["name"] || !info["description"]
      Item.create({
        name: info["name"],
        item_id: info["id"],
        description: info["description"]
      })
    end
  end
end
