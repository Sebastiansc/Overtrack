class CreateMatches < ActiveRecord::Migration[5.0]
  def change
    enable_extension "hstore"
    create_table :matches do |t|
      t.string :region, null: false
      t.string :match_type, null: false
      t.integer :match_id, null: false
      t.integer :match_creation, limit: 8, null: false
      t.hstore :participants, null: false
      t.timestamps
    end
  end

  
end
