Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :doctors, only: [:index]
    end
  end

  get '*path', to: 'pages#index', via: :all
end
