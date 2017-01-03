namespace :champions do
  desc "Fetch and create all champions"
  task update: :environment do
    champions = HTTParty.get(
      'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=all&api_key=a4b014b5-fb9a-4be0-987e-8b423439da37'
    )
    champions["keys"].each do |id, champion|
      info = champions['data'][champion]
      Champion.create(
        name: info["name"],
        title: info["title"],
        blurb: info["blurb"],
        info: info["info"],
        champion_id: id,
        image: info["image"]["full"],
        stats: info["stats"]
      )
    end
  end
end
