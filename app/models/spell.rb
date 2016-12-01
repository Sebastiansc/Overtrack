class Spell < ApplicationRecord
  validates :spell_id, :image_name, :name, :cool_down, :description, presence: true

  extend ApiHelper

  def self.in_match(spell_ids)
    Spell.where(spell_id: spell_ids)
  end
end
