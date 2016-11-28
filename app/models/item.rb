class Item < ApplicationRecord
  validates :name, :item_id, :description, presence: true
end
