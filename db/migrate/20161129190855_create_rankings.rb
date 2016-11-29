class CreateRankings < ActiveRecord::Migration[5.0]
  def change
    create_table :rankings do |t|
      t.json :solo_5x5, default: {}
      t.json :flex_sr, default: {}
      t.json :flex_tt, default: {}
      t.json :team_3x3, default: {}
      t.json :team_5x5, default: {}
    end
  end
end
