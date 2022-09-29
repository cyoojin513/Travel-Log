Rails.application.routes.draw do
  resources :photos, only: [:index, :create, :destroy]
  resources :slideshows
  resources :location, only: [:index]

  resources :users, only: [:show, :create]

  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
end
