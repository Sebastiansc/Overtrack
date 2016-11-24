class CreateHeroes < ActiveRecord::Migration[5.0]
  def change
    create_table :heroes do |t|
      t.integer :player_id, null: false
      t.string :name, null: false
      t.integer :play_time, null: false
      t.text :image, null: false
      t.integer :percentage, null: false
      t.timestamps
    end
  end
end
