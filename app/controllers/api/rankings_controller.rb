class Api::RankingsController < ApplicationController
  def index
    @ranking = Ranking.where(tier: tier)
  end
end
