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

    def create
        @avatar = Avatar.new(story_params)

        if @avatar.save
            render :show, status: :created_at
        else
            render json: @avatar.errors, status: :unprocessable_entity
        end
    end
    
end