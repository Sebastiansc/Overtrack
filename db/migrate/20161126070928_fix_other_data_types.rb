class FixOtherDataTypes < ActiveRecord::Migration[5.0]
  def change
    remove_column :summoners, :loses
    add_column :summoners, :losses, :int, null: false
    change_column :matchings, :summoner_id, :bigint
    change_column :matchings, :match_id, :bigint
    change_column :matches, :match_id, :bigint
  end
end
