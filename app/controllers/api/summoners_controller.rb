class Api::SummonersController < ApplicationController
  #This method is hit upon entering profile page.
  #Attempt to find summoner in local DB. If none found, fetch and create from API.
  #Asynchronously creates most recent (< 20) matches for this player.
  def find_or_create
    @summoner = Summoner.find_by(name: params[:name])
    unless @summoner
      @summoner = Summoner.create_summoner(params[:name])
      unless @summoner
        render json: ["#{params[:name]} does not exist in this region"], status: 404
        return true
      end
      MatchFetch.perform_async(@summoner)
    end
    @summoner.last_viewed = DateTime.now.strftime("%Q").to_i
    @summoner.save
    render :show
  end
end
