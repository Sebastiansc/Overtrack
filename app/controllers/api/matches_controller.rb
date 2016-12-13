class Api::MatchesController < ApplicationController
  # Request matches in batches. Conditionally checks for players who have no match history
  include ApiHelper

  # Tries to find matches in cache otherwise fetches from DB or API
  def next_batch
    summoner = Summoner.by_name(params[:name])
    matches = $redis.get("#{summoner.id}#{params[:limit]}")

    unless matches
      matches = Match.get(
        summoner,
        params[:offset].to_i,
        params[:limit].to_i
      ).to_json
      $redis.set("#{summoner.id}#{params[:limit]}", matches)
    end
    @matches = JSON.parse matches

    data_ids = get_ids
    @champions = Champion.in_match(data_ids[:champions])
    @spells = Spell.in_match(data_ids[:spells])
    @items = Item.in_match(data_ids[:items])

    render :index
  end

  private
  def get_ids
    data_ids = { spells: [], champions: [], items: [] }
    @matches.each do |match|
      match["participants"].each do |participant|
         data_ids[:champions] << participant[1]['champion_id']
         data_ids[:spells] << participant[1]['spell1_id']
         data_ids[:spells] << participant[1]['spell2_id']
         participant[1]["stats"].each do |key, val|
           break unless key.include?("item")
           data_ids[:items] << val
         end
      end
    end
    data_ids
  end
end
