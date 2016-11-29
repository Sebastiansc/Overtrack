namespace :rankings do
  desc "Fetch new ranking leaderboard from LoL API"
  task update: :environment do
    Ranking.update_rankings
  end
end
