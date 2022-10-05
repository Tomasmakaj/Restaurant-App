Rails.application.routes.draw do
  
  resources :users
  resources :orders
  resources :menus
  resources :locations

  post '/login', to: 'users#login'
  get '/me', to: 'users#me'



  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
