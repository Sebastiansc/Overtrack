namespace :champions do
  desc "Fetch and create all champions"
  task update: :environment do
    champions = HTTParty.get(
      'http://ddragon.leagueoflegends.com/cdn/6.23.1/data/en_US/champion.json'
    )
    champions["data"].each do |champion, info|
      Champion.create(
        name: info["name"],
        title: info["title"],
        blurb: info["blurb"],
        info: info["info"],
        champion_id: info["key"],
        image: info["image"]["full"],
        stats: info["stats"]
      )
    end
  end
end
