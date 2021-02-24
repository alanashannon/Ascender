Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create]

    resources :projects, only: [:index, :show, :create, :update, :destroy] 
    
    resources :rewards, only: [:index, :create, :destroy, :update, :show]
    resources :backings, only: [:index, :create, :destroy, :update, :show]

    resource :session, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end
