class Api::SessionsController < ApplicationController
    before_action :require_logged_out, only: [:create]
    before_action :require_logged_in, only: [:destroy]
    # debugger
    def show
        @user = current_user
        if @user
            render 'api/users/show', locals: { avatar: @avatar }
        else
            # debugger
            render json: { user: nil }
        end
    end

    def create

        @user = User.find_by_credentials(params[:credential], params[:password])
        # debugger
        if @user
          login!(@user)
          @avatar = Avatar.find_by(user_id: @user.id)

          render 'api/users/show', locals: { avatar: @avatar }
        else
          render json: { errors: ['The provided credentials were invalid.'] }, 
            status: :unauthorized
        end

    end

    def destroy
        logout!
        head :no_content # populate http response with no content => no body
    end
end
