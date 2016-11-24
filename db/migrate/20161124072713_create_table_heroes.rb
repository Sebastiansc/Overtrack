class CreateTableHeroes < ActiveRecord::Migration[5.0]
  def change
    create_table :table_heroes do |t|
      t.string :name, null: false
      t.string :playtime, null: false
      t.text :image, null: false
      t.integer :percentage, null: false
      t.text :quick, null: false
      t.text :competitive, null: false
      t.integer :player_id, null: false
    end
  end
end
