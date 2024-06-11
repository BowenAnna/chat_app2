Rails.application.routes.draw do
  mount ActionCable.server => "/cable"

  resources :messages
  resources :login # comments
  devise_for :users
end
