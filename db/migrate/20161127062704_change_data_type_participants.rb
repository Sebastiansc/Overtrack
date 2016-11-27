class ChangeDataTypeParticipants < ActiveRecord::Migration[5.0]
  def change
    remove_column :matches, :participants
    add_column :matches, :participants, :jsonb, default: '{}'
  end
end
