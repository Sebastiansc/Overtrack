class AddTierColumnToRankings < ActiveRecord::Migration[5.0]
  def change
    add_column :rankings, :tier, :string, null: false
  end
end
