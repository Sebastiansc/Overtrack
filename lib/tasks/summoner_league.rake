namespace :fetcher do
  namespace :summoner do
    desc "fetch and update data for all summoners in same league"
    task league: :environment do
      @summoners = Summoner.all.to_a

    end

    # save league names in a hash
    def league_hash
      leagues = Hash.new { |hash, key| hash[key] = 0 }
      @summoners.each do |summoner|
        leagues[summoner[:league_name]] += 1 if leagues[summoner[:league_name]]
      end
      leagues
    end
  end
end
