class Api::SummonersController < ApplicationController
  #This method is hit upon entering profile page.
  #Attempt to find summoner in local DB. If none found, fetch and create from API.
  #Asynchronously creates most recent (< 20) matches for this player.
  def find_or_create
    @summoner = Summoner.where("LOWER(name) = LOWER(?)", params[:name]).first
    @summoner = Summoner.create_summoner(params[:name]) unless @summoner
    unless @summoner
      render json: ["#{params[:name]} does not exist in this region"], status: 404
      return true
    end
    render :show
  end
end
