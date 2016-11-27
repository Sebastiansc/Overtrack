class Api::MatchesController < ApplicationController
  def create
    @match = Match.new(match_params)
    if @match.valid?
      @match.save!
     else
      render json: @match.error.full_messages, status: 422
    end
  end

  def fetch
    @matches = Matches.get(params[:id], params[:limit], params[:offset])
    render :index
  end

  private
  def match_params
    params.require(:match).permit(
      :region,
      :match_type,
      :match_id,
      :match_creation,
      :participants
    )
  end
end
