class AvatarsController < ApplicationController
    def show
      @avatar = Avatar.find(params[:id])
    end
  end