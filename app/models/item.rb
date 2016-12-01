class Item < ApplicationRecord
  validates :name, :item_id, :description, presence: true

  extend ApiHelper

  # fetch all items
  def self.all_items
    items = HTTParty.get("http://ddragon.leagueoflegends.com/cdn/6.23.1/data/en_US/item.json")
    item_ids = items.to_h["data"].keys
    item_ids.each do |id|
      item_params = items.to_h["data"][id]
      Item.create(
        item_id: id,
        description: item_params["description"],
        name: item_params["name"]
      )
    end
  end
end
