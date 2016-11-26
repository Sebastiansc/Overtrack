class CreateSummoners < ActiveRecord::Migration[5.0]
  def change
    create_table :summoners do |t|
      t.string :name, null: false
      t.integer :level, null: false
      t.integer :summoner_id, null: false
      t.integer :profile_icon, null: false
      t.string :tier, null: false
      t.integer :wins, null: false
      t.integer :loses, nlll: false
      t.integer :league_points, null: false
      t.string :division, null: false
      t.string :league_name, null: false
      t.timestamps
    end
  end
end
