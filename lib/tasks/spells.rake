require 'task_helpers/summoner_helper'

namespace :spells do
  desc "Fetches Spells data from LoL API"
  task update: :environment do
    spells = HTTParty.get(
      "https://global.api.pvp.net/api/lol/static-data/na/v1.2/summoner-spell?spellData=all&api_key=#{SummonerApiHelper.api_key}"
    )
    spells["data"].each do |key, info|
      Spell.create!({
        image_name: info["image"]["full"],
        name: info["name"],
        spell_id: info["id"],
        cool_down: info["cooldownBurn"],
        description: info["description"]
      })
    end
  end
end
