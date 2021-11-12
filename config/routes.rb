Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create]

    resources :projects, only: [:index, :show, :create, :update, :destroy] 
    resources :rewards, only: [:index, :create, :destroy, :update, :show]
    resources :backings, only: [:index, :create, :destroy, :update, :show]
    resources :categories, only: [:index, :create]

    resource :session, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end
