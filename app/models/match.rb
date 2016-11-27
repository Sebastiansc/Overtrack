class Match < ApplicationRecord
  validates :region, :match_type, :match_id, :match_creation, :participants, presence: true
  store_accessor :participants

  has_many :matchings
  has_many :summoners, through: :matchings, source: :summoner

  def self.get(id, limit, offset)
    summoner = Summoner.find(id)
    Matches.where(offset(offset).limit(limit)
  end
end
