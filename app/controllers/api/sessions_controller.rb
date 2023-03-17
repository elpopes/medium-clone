class Api::SessionsController < ApplicationController
    before_action :require_logged_out, only: [:create]
    before_action :require_logged_in, only: [:destroy]
    def show
        @user = current_user
        if @user
            render 'api/users/show', locals: { avatar: @avatar }
        else
    
            render json: { user: nil }
        end
    end

    def create

        @user = User.find_by_credentials(params[:credential], params[:password])

        if @user
          login!(@user)
          @avatar = Avatar.find_by(user_id: @user.id)

          render 'api/users/show', locals: { avatar: @avatar }
        else
          render json: { errors: ['YOU SHALL NOT PASS!'] }, 
            status: :unauthorized
        end

    end

    def destroy
        logout!
        head :no_content # populate http response with no content => no body
    end
end
