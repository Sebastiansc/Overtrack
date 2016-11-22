require 'nokogiri'
require 'open-uri'
require 'byebug'
require 'json'

player_tags = []

(0..50).step(50) do |num|
  doc = Nokogiri::HTML(open("http://masteroverwatch.com/leaderboards/pc/global/mode/ranked/category/skillrating/hero/overall/role/overall/data?offset=#{num}"))
  json_doc = JSON.parse(doc)
  json_doc["entries"].each do |user_string|
    player_tags << Nokogiri::HTML(user_string).xpath("//a").first.values[1].split("/")[-3..-1]
  end
end

p player_tags
