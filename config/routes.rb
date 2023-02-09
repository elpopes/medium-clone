Rails.application.routes.draw do
    namespace :api, defaults: { format: :json } do
      resources :users, only: [:create, :show, :update, :destroy]
      resource :session, only: [:create, :show, :destroy]
      resources :stories
    end

    resources :avatars, only: [:show]

    get '*path', to: "static_pages#frontend_index"
  end
 