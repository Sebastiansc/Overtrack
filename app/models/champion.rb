class Champion < ActiveRecord::Base
  validates :info, :stats, :name, :champion_id, :image, :blurb, presence: true
  validates :champion_id, uniqueness: true

  def in_match(match)
    champions_ids = match.map{ |_, info| info['summoner']['champion_id'] }
    Champion.where(champion_id: champions_ids)
  end
end
