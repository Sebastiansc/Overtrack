require 'httparty'
require_relative "../concerns/overwatch_call"

class Api::PlayersController < ApplicationController
  def show_or_create
    @player = Player.find_by(player_tag: player_params[:player_tag])
    if !@player
      player = OverwatchCall.fetch([
        player_params[:platform], player_params[:country], player_params[:platform]
      ])
      @player = Player.create(player)
    end
    render :show
  end

  private
  def player_params
    params.require(:player).permit(:player_tag, :country, :platform)
  end
end
