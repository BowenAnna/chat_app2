Rails.application.routes.draw do
  mount ActionCable.server => "/cable"

  resources :messages
  devise_for :users
end
