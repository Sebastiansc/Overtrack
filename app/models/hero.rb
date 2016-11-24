class Hero < ApplicationRecord
  store :quick, coder: JSON
  store :competitive, coder: JSON
end
