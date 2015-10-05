Rails.application.routes.draw do
  root 'app#index'
  devise_for :users

  get '/listings/send_email', to: 'listings#send_email'

  resources :listings
  resources :listing_shortlists
  resources :shortlists

  get '/users/user_logged_in', to: 'users#user_logged_in'
  post '/users/login', to: 'users#login', as: :user_login
  delete '/users/logout', to: 'users#logout', as: :user_logout
  get '/users/:id', to: 'users#show', as: :user

  get '*ember' => 'app#index'
end
