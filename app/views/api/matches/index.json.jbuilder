json.array! @matches do |match|
  json.partial! partial: 'api/matches/show', locals: {match: match}
end
