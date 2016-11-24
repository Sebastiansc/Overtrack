require 'httparty'

class OverwatchCall
  def self.fetch(info)
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
    player = {
      player_tag: info[2],
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
    return player
  end

  def fetch_heroes(info)
    
  end
end
