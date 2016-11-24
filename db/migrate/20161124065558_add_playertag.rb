class AddPlayertag < ActiveRecord::Migration[5.0]
  def change
    add_column :players, :player_tag, :string, null: false
  end
end
