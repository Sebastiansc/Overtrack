# rake task setup for scheduling automatic datascraping
# schedule cron job utilizing whenever gem
# checkout config/schedule.rb
require 'nokogiri'
require 'open-uri'
require 'byebug'
require 'json'
require 'httparty'

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
    byebug

    players_info[0..2].each do |info|
      profile = HTTParty.get(
        "https://api.lootbox.eu/#{info[0]}/#{info[1]}/#{info[2]}/profile"
      )
      quick_stas = HTTParty.get(
        "https://api.lootbox.eu/#{info[0]}/#{info[1]}/#{info[2]}/quickplay/allHeroes/"
      )
      competitive_stats = HTTParty.get(
        "https://api.lootbox.eu/#{info[0]}/#{info[1]}/#{info[2]}/competitive/allHeroes/"
      )
      data = profile["data"]
      byebug if !data
      player = {
        username: data["username"],
        level: data["level"],
        avatar: data["avatar"],
        level_frame: data["levelFrame"],
        star: data["star"],
        quick: {
          wins: data["games"]["quick"]["wins"],
          playtime: data["playtime"]["quick"],
          stats: quick_stas.to_h
        },
        competitive: {
          wins: data["games"]["competitive"]["wins"],
          lost: data["games"]["competitive"]["lost"],
          played: data["games"]["competitive"]["played"],
          playtime: data["playtime"]["competitive"],
          rank: data["competitive"]["rank"],
          rank_image: data["competitive"]["rank_img"],
          stats: competitive_stats.to_h
        }
      }
      players.push(player)
    end

    players.each do |player|
      Player.create!(player)
    end

  end
end
