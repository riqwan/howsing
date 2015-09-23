Rails.application.routes.draw do
  devise_for :users
  root 'app#index'

  resources :listings
  resources :shortlists

  get '/users/logged_in_user', to: 'users#logged_in_user'
  post '/users/login', to: 'users#login', as: :user_login
  delete '/users/logout', to: 'users#logout', as: :user_logout

  get '*ember' => 'app#index'
end
