class Player < ApplicationRecord
  store :quick, accessors: [ :melee, :attack ], coder: JSON
  store :competitive, accessors: [ :melee, :attack ], coder: JSON
end
