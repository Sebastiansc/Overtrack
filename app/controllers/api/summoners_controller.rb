class Api::SummonersController < ApplicationController
  #This method is hit upon entering profile page.
  #Attempt to find summoner in local DB. If none found, fetch and create from API. Also fetch and create most recent (< 20) matches for this player
  def find_or_create
    @summoner = Summoner.find_by(name: params[:name])
    if !@summoner
      @summoner = Summoner.create_summoner(params[:name])
      end_time = DateTime.now.strftime("%Q")
      Match.fetch_matches(@summoner, {
          end_time: end_time,
          offset: 0,
          limit: 20
        })
    end
    @matches = Match.get(@summoner.summoner_id, 0, 20)
    render :show
  end
end
