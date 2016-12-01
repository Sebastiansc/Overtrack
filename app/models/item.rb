class Item < ApplicationRecord
  validates :name, :item_id, :description, presence: true

  extend ApiHelper

  def self.in_match(item_ids)
    Item.where(item_id: item_ids)
  end
end
