# rake task setup for scheduling automatic datascraping
# schedule cron job utilizing whenever gem
# checkout config/schedule.rb

namespace :fetcher do
  desc "Rake task to get leadboard data"
  task update: :environment do
    ruby "bot/leaderboard.rb"
  end
end
