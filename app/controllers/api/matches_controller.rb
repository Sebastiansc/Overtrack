class Api::MatchesController < ApplicationController
  #Request matches in batches. Conditionally checks for players who have no match history
  include ApiHelper

  def next_batch
    summoner = Summoner.by_name(params[:name])
    @matches = Match.get(
      summoner,
      params[:offset].to_i,
      params[:limit].to_i
    )
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

  def preload(summoner)
    if summoner.matches.count < params[:limit].to_i * 2
      MatchFetch.perform_async(
        summoner,
        params[:offset].to_i + params[:limit].to_i,
        params[:limit].to_i + params[:limit].to_i
      )
    end
  end

end
