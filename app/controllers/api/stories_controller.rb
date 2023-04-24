class Api::StoriesController < ApplicationController
    before_action :require_logged_in, except: [:show, :index, :search]
  
    def search
      @stories = Story.search(params[:query])
      render json: @stories
    end
  
    def index
      @stories = Story.all.order(created_at: :desc)
      render :index
    end
  
    def show
      @story = Story.find(params[:id])
      render json: @story.to_json(include: :comments)
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
  