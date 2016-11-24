class CreatePlayers < ActiveRecord::Migration[5.0]
  def change
    create_table :players do |t|
      t.string :username, null: false
      t.integer :level, null: false
      t.text :quick
      t.text :competitive
      t.text :avatar, null: false
      t.text :level_frame, null: false
      t.text :star, null: false
      t.timestamps
    end
  end
end
