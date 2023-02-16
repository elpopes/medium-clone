 class Api::StoriesController < ApplicationController
    before_action :require_logged_in, except: [:show, :index]
  
    def index
      @stories = Story.all
    #   .sort { |a,b| b.created_at <=> a.created_at }
      render :index
    end
  
    def show
      @story = Story.find(params[:id])
    end
  
    def new
      @story = Story.new
    end
  
    def create
        @story = Story.new(story_params)
      
        if params[:photo]
          @story.photo.attach(params[:photo])
        end
      
        if @story.save
          render :show
        else
          render json: @story.errors, status: :unprocessable_entity
        end
      end
  
    def update
      @story = Story.find(params[:id])
      if @story.update(story_params)
        render :show
      else
        render json: @story.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @story = Story.find(params[:id])
      @story.destroy
      head :no_content
    end
  
    private
  
    def story_params
        params.permit(:title, :body, :author_id)
      end
  end
  