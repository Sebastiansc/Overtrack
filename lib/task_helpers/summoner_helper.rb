module SummonerApiHelper
  def self.api_key
    "a4b014b5-fb9a-4be0-987e-8b423439da37"
  end

  def self.region
    "na"
  end

  # string from UTF-8 to ASCII because HTTParty takes ASCII format
  def self.to_ascii(summoner)
    summoner_name = summoner["name"].unpack("U*").map(&:chr).join
    summoner_name.downcase.split(" ").join("")
  end
end
