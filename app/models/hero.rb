class Hero < ApplicationRecord
  self.table_name = "heroes"
  store :quick, coder: JSON
  store :competitive, coder: JSON

  belongs_to :player
end
