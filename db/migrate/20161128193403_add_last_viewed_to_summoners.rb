class AddLastViewedToSummoners < ActiveRecord::Migration[5.0]
  def change
    add_column :summoners, :last_viewed, :bigint
  end
end
