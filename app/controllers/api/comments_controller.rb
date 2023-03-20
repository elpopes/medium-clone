class Api::CommentsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]
    before_action :set_story
    before_action :set_comment, only: [:show, :update, :destroy]
  
    def index
        @comments = Comment.where(story_id: params[:story_id])
        render :index
      end
  
    def show
        @comment = Comment.find(params[:id])
        render :show
    end
  
    def create
        @comment = current_user.comments.new(comment_params)
        if @comment.save
          render :show
        else
          render json: @comment.errors.full_messages, status: 422
        end
      end
  

    def update
        @comment = current_user.comments.find(params[:id])
        if @comment.update(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = current_user.comments.find(params[:id])
        @comment.destroy
        render :show
    end
  
    private
  
    def comment_params
        params.require(:comment).permit(:title, :body, :comment_author_id)
    end
    
  end
  