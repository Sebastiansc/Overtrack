class Api::MatchesController < ApplicationController
  #Hit upon requesting `show more` on profile page
  def next_batch
    @matches = Match.get(params[:id],
      params[:offset].to_i,
      params[:limit].to_i
    )
    render :index
  end
end
