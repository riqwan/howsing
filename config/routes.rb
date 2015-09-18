Rails.application.routes.draw do
  root 'app#index'
  get '*ember' => 'app#index'
end
