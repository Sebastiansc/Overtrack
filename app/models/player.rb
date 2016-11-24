class Player < ApplicationRecord
  store :quick, coder: JSON
  store :competitive, coder: JSON
end
