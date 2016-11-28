class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.integer :item_id, null: false
      t.text :description, null: false
      t.string :name, null: false
      t.timestamps
    end
  end
end
