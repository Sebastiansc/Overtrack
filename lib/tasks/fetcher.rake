# rake task setup for scheduling automatic datascraping
# schedule cron job utilizing whenever gem
# checkout config/schedule.rb
require 'nokogiri'
require 'open-uri'
require 'byebug'
require 'json'
require 'httparty'
require_relative '../../app/controllers/concerns/overwatch_call'

namespace :fetcher do
  desc "Rake task to get leadboard data"
  task :update => :environment do
    # leaderboard datascraping from www.masteroverwatch.
    players_info = []
    (0..48).step(50) do |num|
      doc = Nokogiri::HTML(
        open(
          "http://masteroverwatch.com/leaderboards/pc/global/mode/ranked/category/skillrating/hero/overall/role/overall/data?offset=#{num}"
        )
      )
      json_doc = JSON.parse(doc)
      json_doc["entries"].each do |user_string|
        players_info << Nokogiri::HTML(user_string).xpath("//a").first.values[1].split("/")[-3..-1]
      end
    end

    players = []
    players_info[0..2].each do |info|
      player = OverwatchCall.fetch(info)
      players.push(player)
    end

    players.each do |player|
      Player.create!(player)
    end
  end
end
