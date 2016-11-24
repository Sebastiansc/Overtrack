require 'httparty'

class Api::PlayersController < ApplicationController
  def show_or_create
    @player = Player.find_by(player_tag: player_params[:player_tag])
    if @player
      render :show
    else
      
      @player = Player.create
    end
  end

  private
  def player_params
    params.require(:player).permit(:player_tag)
  end
end
