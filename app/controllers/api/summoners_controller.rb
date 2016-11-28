class Api::SummonersController < ApplicationController
  #This method is hit upon entering profile page.
  #Attempt to find summoner in local DB. If none found, fetch and create from API.
  #Creates most recent (< 20) matches for this player.
  def find_or_create
    @summoner = Summoner.find_by(name: params[:name])
    if !@summoner
      @summoner = Summoner.create_summoner(params[:name])
      MatchFetch.perform_async(@summoner)
    end
    render :show
  end
end
