Rails.application.routes.draw do
    namespace :api, defaults: { format: :json } do
      resources :users, only: [:create, :show, :update, :destroy]
      resource :session, only: [:create, :show, :destroy]
    end

    get '*path', to: "static_pages#frontend_index"
  end
 