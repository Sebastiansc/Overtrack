class Champion < ActiveRecord::Base
  validates :info, :stats, :name, :champion_id, :image, :blurb, presence: true
  validates :champion_id, uniqueness: true

  def self.in_match(champion_ids)
    Champion.where(champion_id: champion_ids)
  end
end
