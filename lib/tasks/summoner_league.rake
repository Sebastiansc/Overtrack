namespace :summoner do
  desc "fetch and update data for all summoners in same league"
  task league: :environment do
    summoners = Summoner.order('last_viewed DESC').limit(200)
    summoners.each do |summoner|
      Summoner.solo_rank(summoner)
      Match.fetch_matches(summoner, {offset: 0, limit: 2})
    end
  end
end
