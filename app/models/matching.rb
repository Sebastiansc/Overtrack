class Matching < ApplicationRecord
  validates :summoner, :match, presence: true
  validates :summoner_id, uniqueness:  { scope: :match_id }

  #Primary key must be set so Rails doesn't default to id
  belongs_to :summoner, primary_key: :summoner_id
  belongs_to :match, primary_key: :match_id
end
