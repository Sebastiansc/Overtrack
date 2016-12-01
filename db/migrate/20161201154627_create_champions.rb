class CreateChampions < ActiveRecord::Migration[5.0]
  def change
    create_table :champions do |t|
      t.string :name
      t.integer :champion_id
      t.string :title
      t.text :blurb
      t.json :info, default: {}
      t.string :image
      t.json :stats, default: {}
    end
  end
end
