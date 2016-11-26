class CreateSpells < ActiveRecord::Migration[5.0]
  def change
    create_table :spells do |t|
      t.string :image_name, null: false
      t.string :name, null: false
      t.integer :spell_id, null: false
      t.integer :cool_down, null: false
      t.text :description, null: false
      t.timestamps
    end
  end

end
