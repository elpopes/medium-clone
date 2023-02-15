class Api::AvatarsController < ApplicationController
    def index
      @avatars = Avatar.all
      render :index
    end
  
    def show
      @avatar = Avatar.find_by(user_id: params[:id])
      render :show
    end
  
    def create
      user = User.find(params[:avatar][:user_id])
      avatar = user.build_avatar(avatar_params)
  
      if params[:avatar][:photo]
        avatar.photo.attach(params[:avatar][:photo])
      end
  
      if avatar.save
        render :show
      else
        render json: avatar.errors, status: :unprocessable_entity
      end
    end
  
    def avatar_params
      params.require(:avatar).permit(:user_id, :photo)
    end

  end