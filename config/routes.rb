Rails.application.routes.draw do
  resources :users
  resources :menus
  resources :locations
  
  post '/login', to: 'users#login'
  get '/profile', to: 'users#profile'
  post '/save_order', to: 'orders#save_order'
  get '/my_active_orders', to: 'orders#my_active_orders'
  patch '/update', to: 'users#update'
  delete '/destroy', to: 'users#destroy'
  post '/check_out', to: 'orders#check_out'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end