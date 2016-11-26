class AddIndices < ActiveRecord::Migration[5.0]
  def change
    add_index :summoners, :name, unique: true
    add_index :summoners, :summoner_id, unique: true
    add_index :spells, :spell_id, unique: true
    add_index :matches, :participants, using: :gist
  end
end
