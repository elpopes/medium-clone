Rails.application.routes.draw do
    namespace :api, defaults: { format: :json } do
      resources :users, only: [:create, :show, :update, :destroy]
      resource :session, only: [:create, :show, :destroy]
      resources :avatars, only: [:create, :index]
      resources :stories, only: [:index]
    #   don't forget show, new create update and destroy for stories
    end

    resources :avatars, only: [:show]

    get '*path', to: "static_pages#frontend_index"
  end
 