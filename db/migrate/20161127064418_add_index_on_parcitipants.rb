class AddIndexOnParcitipants < ActiveRecord::Migration[5.0]
  def change
    add_index :matches, :participants, using: :gin
  end
end
