class Champion < ActiveRecord::Base
  validates :info, :stats, :name, :champion_id, :image, :blurb, presence: true
  validates :champion_id, uniqueness: true

  def in_match(matches)
    champion_ids = []
    matches.each do |match|
      match.participants.each do |participant|
       champion_ids << ['champion_id']
    end
    Champion.where(champion_id: champion_ids)
  end
end
