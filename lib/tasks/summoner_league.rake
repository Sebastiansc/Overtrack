namespace :summoner do
  desc "fetch and update data for all summoners in same league"
  task league: :environment do
    summoners = Summoner.order('last_viewed DESC').limit(200)
    summoners.each do |summoner|
      entry = Summoner.league_entries(summoner)
    end
  end
end
