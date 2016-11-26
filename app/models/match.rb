class Match < ApplicationRecord
  validates :region, :match_type, :match_id, :match_creation, :participants, presence: true
  store_accessor :participants

  has_many :matchings
  has_many :summoners, through: :matchings, source: :summoner
end
