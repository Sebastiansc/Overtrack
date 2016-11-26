class AddMatchDuration < ActiveRecord::Migration[5.0]
  def change
    add_column :matches, :match_duration, :integer, null: false
  end
end
