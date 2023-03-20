Rails.application.routes.draw do
    namespace :api, defaults: { format: :json } do
      resources :users, only: [:create, :show, :index, :update, :destroy]
      resource :session, only: [:create, :show, :destroy]
      resources :avatars, only: [:create, :show,:index, :update, :destroy]
      resources :stories, only: [:index, :show, :create, :update, :destroy] do
        resources :comments, only: [:index, :create, :update, :destroy]
      end
    end
  
    resources :avatars, only: [:show]
  
    get '*path', to: "static_pages#frontend_index"
  end
  
 