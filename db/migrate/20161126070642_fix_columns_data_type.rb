class FixColumnsDataType < ActiveRecord::Migration[5.0]
  def change
    change_column :summoners, :summoner_id, :bigint
  end
end
