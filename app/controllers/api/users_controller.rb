class Api::UsersController < ApplicationController
    before_action :require_logged_out, only: [:create]

    def show
        @user = User.find(params[:id])
        render :show
    end
    
    def index
        @users = User.all
        render :index
    end
    
    def create

        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    wrap_parameters include: User.attribute_names + ['password']

    def update
        @user = User.find(params[:id])
        if @user.update(user_params)
          render :show
        else
          render json: @user.errors, status: :unprocessable_entity
        end
      end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password, :f_name, :l_name)
    end


end
