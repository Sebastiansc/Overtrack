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
    if summoner.matches.count < params[:limit].to_i * 2
      MatchFetch.perform_async(
        summoner,
        params[:offset].to_i + params[:limit].to_i,
        params[:limit].to_i + params[:limit].to_i
      )
    end
    render :index
  end
end
