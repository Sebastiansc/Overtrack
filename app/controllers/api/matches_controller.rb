class Api::MatchesController < ApplicationController
  #Request matches in batches. Conditionally checks for players who have no match history
  include ApiHelper

  def next_batch
    summoner = Summoner.find_by(name: params[:name], region: region)
    @matches = Match.get(summoner.summoner_id,
      params[:offset].to_i,
      params[:limit].to_i
    ) || []
    MatchFetch.perform_async(summoner,
      params[:offset].to_i + params[:limit].to_i,
      params[:limit].to_i + params[:limit].to_i
    )
    render :index
  end
end
