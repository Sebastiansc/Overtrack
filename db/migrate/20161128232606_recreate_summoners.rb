class RecreateSummoners < ActiveRecord::Migration[5.0]
  def change
    create_table :summoners do |t|
      t.string :name, null: false
      t.integer :level, null: false
      t.integer :summoner_id, null: false
      t.integer :profile_icon, null: false
      t.json :solo_5x5, default: '{}'
      t.json :flex_sr, default: '{}'
      t.json :team_5x5, default: '{}'
      t.json :team_3x3, default: '{}'
      t.timestamps
    end

  end
end
