class Matching < ApplicationRecord
  validates :summoner, :match, presence: true

  #Primary key must be set so Rails doesn't default to id
  belongs_to :summoner, primary_key: :summoner_id
  belongs_to :match, primary_key: :match_id, dependent: :destroy
end
