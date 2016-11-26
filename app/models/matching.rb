class Matching < ApplicationRecord
  validates :summoner, :match, presence: true
  belongs_to :summoner
  belongs_to :match
end
