Rails.application.routes.draw do
  resources :photos, only: [:index, :show, :create, :destroy]
  resources :slideshows

  resources :users, only: [:show, :create]

  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
end
