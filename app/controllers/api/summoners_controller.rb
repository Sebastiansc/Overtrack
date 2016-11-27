class Api::SummonersController < ApplicationController
  #This method is hit upon entering profile page.
  #Attempt to find summoner in local DB. If none found, fetch and create from API. Also fetch and create matches for this player
  def find_or_create
    @summoner = Summoner.find_by(name: params[:name])
    if !@summoner
      @summoner = Summoner.create_summoner(params[:name])
      Match.fetch_matches(@summoner)
    end
    @matches = Match.get(@summoner.summoner_id, 0, 20)
    render :show
  end
end
