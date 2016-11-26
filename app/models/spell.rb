class Spell < ApplicationRecord
  validates :spell_id, :image_name, :name, :cool_down, :description, presence: true

  extend ApiHelper

  def self.all_spells
    spells = HTTParty.get("https://global.api.pvp.net/api/lol/static-data/na/v1.2/summoner-spell?spellData=all&api_key=#{api_key}")
    spell_names = spells.to_h["data"].keys
    spell_names.each do |spell|
      spell_params = spells.to_h["data"][spell]
      Spell.create!(
        spell_id: spell_params["id"],
        image_name: spell_params["image"]["full"],
        name: spell_params["name"],
        cool_down: spell_params["cooldownBurn"].to_i,
        description: spell_params["sanitizedDescription"]
      )
    end
  end
end
