class AddCompoundIndexMatchings < ActiveRecord::Migration[5.0]
  def change
    add_index :matchings, [:summoner_id, :match_id], unique: true
  end
end
