# Rails.application.routes.draw do
#   mount ActionCable.server => "/cable"

#   resources :messages
#   resources :login # comments
#   devise_for :users

# end

Rails.application.routes.draw do
  mount ActionCable.server => "/cable"

  resources :messages
  # Define a route for /users that maps to the users controller's index action
  # You can also use the resources method to define a standard RESTful set of routes for users
  resources :users, only: [:index, :create, :show, :update, :destroy]

end