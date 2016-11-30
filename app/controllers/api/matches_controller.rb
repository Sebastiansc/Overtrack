class Api::MatchesController < ApplicationController
  #Request matches in batches. Conditionally checks for players who have no match history
  def next_batch
    @matches = Match.get(params[:summoner_id],
      params[:offset].to_i,
      params[:limit].to_i
    ) || []
    summoner = Summoner.find_by(summoner_id: params[:summoner_id])
    MatchFetch.perform_async(summoner,
      params[:offset].to_i + params[:limit].to_i,
      params[:limit].to_i + params[:limit].to_i
    )
    render :index
  end
end
