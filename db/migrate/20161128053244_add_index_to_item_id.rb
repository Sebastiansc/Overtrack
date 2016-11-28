class AddIndexToItemId < ActiveRecord::Migration[5.0]
  def change
    add_index :items, :item_id
  end
end
