class CreatePlayers < ActiveRecord::Migration[5.0]
  def change
    create_table :players do |t|
      t.string :username, null: false
      t.integer :level, null: false

      t.timestamps
    end
  end
end
