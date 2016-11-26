class DropAllTables < ActiveRecord::Migration[5.0]
  def change
    drop_table :players
    drop_table :heroes
  end
end
