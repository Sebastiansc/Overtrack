namespace :match
desc "Delete matches older than a month from DB"
task clean: :environment do
  treshold = (DateTime.now - 30).strftime("%Q").to_i
  Match.where('match_creation < ?', treshold).destroy_all
end
