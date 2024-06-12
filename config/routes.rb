Rails.application.routes.draw do
  mount ActionCable.server => "/cable"

  resources :messages

  resources :users, only: [:index, :create, :show, :update, :destroy]

  # get 'users', to: 'users#index'
  post "users/login", to: "sessions#create"
  # get "/login", to: "users#token_authenticate"
end