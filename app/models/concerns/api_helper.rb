module ApiHelper
  def api_key
    "a4b014b5-fb9a-4be0-987e-8b423439da37"
  end

  def region
    "na"
  end

  # string from UTF-8 to ASCII because HTTParty takes ASCII format
  def to_ascii(name)
    summoner_name = name.unpack("U*").map(&:chr).join
    summoner_name.downcase.split(" ").join("")
  end

  def begin_time
    (DateTime.now - 30).strftime("%Q")
  end

  def end_time
    DateTime.now.strftime("%Q")
  end

  def ranks
    "TEAM_BUILDER_RANKED_SOLO,TEAM_BUILDER_DRAFT_RANKED_5x5,RANKED_SOLO_5x5,RANKED_FLEX_SR"
  end
end
