class AddIndexOnPlayerTag < ActiveRecord::Migration[5.0]
  def change
    add_index :players, :player_tag
  end
end
