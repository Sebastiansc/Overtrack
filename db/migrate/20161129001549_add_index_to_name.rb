class AddIndexToName < ActiveRecord::Migration[5.0]
  def change
    add_index :summoners, [:name, :region], unique: true
  end
end
