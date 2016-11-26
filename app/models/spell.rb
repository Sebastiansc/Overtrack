class Spell < ApplicationRecord
  validates :image_name, :name, :cool_down, :description, presence: true
end
