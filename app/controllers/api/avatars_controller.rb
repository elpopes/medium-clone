class Api::AvatarsController < ApplicationController
    def index
        @avatars = Avatar.all
        render :index
    end

    def show
        @avatar = Avatar.find_by(user_id: params[:id])
        # debugger
        render :show
    end
    
end