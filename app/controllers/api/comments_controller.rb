class Api::CommentsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]
    before_action :set_story, only: [:create, :update, :destroy]
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
        @comment = @story.comments.new(comment_params)
        @comment.comment_author_id = current_user.id
      
        if @comment.save
            render json: @comment
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
        if @comment.destroy
          render json: {}, status: 204
        else
          render json: @comment.errors.full_messages, status: 422
        end
      end
  
    private
  
    def comment_params
        params.require(:comment).permit(:body, :comment_author_id, :story_id)
    end

    def set_story
        @story = Story.find(params[:story_id])
    end

    def set_comment
        @comment = Comment.find(params[:id])
    end
    
  end
  