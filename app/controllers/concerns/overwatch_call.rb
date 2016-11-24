require 'httparty'
#Class to modulize methods shared by Rake fetcher:update and Players Controller
class OverwatchCall
  def self.fetch(info)
    profile = HTTParty.get(
      "https://api.lootbox.eu/#{info[0]}/#{info[1]}/#{info[2]}/profile"
    )
    quick_stats = all_heroes(info, "quick")
    competitive_stats = all_heroes(info, "competitive")

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
        stats: quick_stats.to_h
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

    create_or_update(player)
  end

  def self.all_heroes(info, game_type)
    return HTTParty.get(
      "https://api.lootbox.eu/#{info[0]}/#{info[1]}/#{info[2]}/#{game_type}/allHeroes/"
    )
  end

  #Looks for the player in Rails. If the player exists it updates it with the new data fetched from the API. Else, it creats it
  def self.create_or_update(player_info)
    byebug
    player = Player.find_by(player_tag: player_info[:player_tag])
    if player
      player.update_attributes(player_info)
    else
      Player.create!(player_info)
    end
  end

  def fetch_heroes(info, game_type)
    hero = HTTParty.get(
      "https://api.lootbox.eu/#{info[0]}/#{info[1]}/#{info[2]}/#{game_type}/heroes"
    )


  end
end
