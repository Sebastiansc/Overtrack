class Api::SummonersController < ApplicationController
  def show
    @summoner = Summoner.find(params[:name])
    if @summoner
      render :show
    else
      @summoner = Summoner.create_summoner(params[:name])
      Match.fetchMatches(@summoner)
    end
  end
end
