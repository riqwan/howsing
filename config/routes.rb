Rails.application.routes.draw do
  root 'app#index'

  resources :listings
  resources :shortlists
  resources :users

  get '*ember' => 'app#index'
end
