class AddCompundIndexHeroes < ActiveRecord::Migration[5.0]
  def change
    add_index :heroes, [:name, :player_id], unique: true
  end
end
