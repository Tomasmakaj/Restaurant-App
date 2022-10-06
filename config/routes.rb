Rails.application.routes.draw do
  
  resources :users
  resources :orders
  resources :menus
  resources :locations

  post '/login', to: 'users#login'
  get '/profile', to: 'users#profile'
  post '/save_order', to: 'orders#save_order'
  get '/my_active_orders', to: 'orders#my_active_orders'



  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
