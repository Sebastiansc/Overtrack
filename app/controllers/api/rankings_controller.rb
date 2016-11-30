class Api::RankingsController < ApplicationController
  def index
    @ranking = Ranking.where(tier: params[:tier])
  end
end
