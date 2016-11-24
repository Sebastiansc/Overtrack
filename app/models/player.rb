class Player < ApplicationRecord
  store :quick, coder: JSON
  store :competitive, coder: JSON

  has_many :heroes, dependent: :destroy
end
