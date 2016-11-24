require 'httparty'
#Class to modulize methods shared by Rake fetcher:update and Players Controller
class OverwatchCall
  def self.create_player(info)
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
    HTTParty.get(
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

  #Fetches heroes overall and stats data. Uses a hash to be able to update both quick and competitive fields at the same time(hero creation would be much more complicated otherwise, due to null: false constraint on all fields)
  def run_heroes(player_info, game_type)
    quick = fetch_heroes("quick")
    competitive = fetch_heroes("competitive")
    quick.each do |name, info|
      quick_stats = fetch_stats(info, "quick", name)
      competitive_stats = fetch_stats(info, "competitive", name)
      hero = Hero.new({
        name: name,
        image: info["image"],
        percentage: info["percentage"],
        player_id: Player.find_by(player_tag: player_info[2]).id
      })
      hero.quick = quick_stats
      hero.quick[:playtime] = quick[name]["playtime"]
      hero.competitive = competitive_stats
      hero.competitive[:playtime] = competitive[name]["playtime"]
      save_or_update(hero)
    end
  end

  def self.save_or_update(hero)
    rails_hero = Hero.find_by(
      name: hero[:name], player_id: hero[:player_id]
    )
    if hero
      rails_hero.update_attributes(hero_info)
    else
      hero.save!
    end
  end

  #Heroes are returned in an array of hashes. Each gametype contains specific information. Must run both to get all data sets. Returns a hash for ease of access
  def fetch_heroes(info, game_type)
      heroes = HTTParty.get(
        "https://api.lootbox.eu/#{info[0]}/#{info[1]}/#{info[2]}/#{game_type}/heroes"
      )
      heroes_hash = {}
      heroes.each{ |hero| heroes_hash[hero["name"]] = hero }
      heroes_hash
  end

  def fetch_stats(info, game_type, name)
    HTTParty.get(
      "https://api.lootbox.eu/#{info[0]}/#{info[1]}/#{info[2]}/#{game_type}/hero/#{name}/"
    )
  end
end
