class Api::MatchesController < ApplicationController
  #Hit upon requesting `show more` on profile page
  def next_batch
    @matches = Matches.get(params[:id], params[:limit], params[:offset])
    render :index
  end
end
