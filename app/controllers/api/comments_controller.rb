class Api::CommentsController < ApplicationController
    before_action :set_story
    before_action :set_comment, only: [:show, :update, :destroy]
  
    def index
      @comments = @story.comments
      render json: @comments
    end
  
    def show
      render json: @comment
    end
  
    def create
      @comment = @story.comments.new(comment_params)
  
      if @comment.save
        render json: @comment, status: :created
      else
        render json: @comment.errors, status: :unprocessable_entity
      end
    end
  
    def update
      if @comment.update(comment_params)
        render json: @comment
      else
        render json: @comment.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @comment.destroy
    end
  
    private
  
    def set_story
      @story = Story.find(params[:story_id])
    end
  
    def set_comment
      @comment = @story.comments.find(params[:id])
    end
  
    def comment_params
      params.require(:comment).permit(:body, :comment_author_id)
    end
  end
  