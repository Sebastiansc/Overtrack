class Matchings < ActiveRecord::Migration[5.0]
  def change
    create_table :matchings do |t|
      t.integer :summoner_id, null: false
      t.integer :match_id, null: false
      t.timestamps
    end
  end
end
