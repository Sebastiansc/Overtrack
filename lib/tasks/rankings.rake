namespace :rankings do
  desc "Fetch new ranking leaderboard from LoL API"
  task update: :environment do
    Ranking.update_rankings("challenger")
    Ranking.update_rankings("master")
  end
end
