class AddIndexToChampionId < ActiveRecord::Migration[5.0]
  def change
    add_index :champions, :champion_id, unique: true
  end
end
