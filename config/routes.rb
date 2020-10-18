Rails.application.routes.draw do
  root 'pages#index'

  devise_for :users,
             path: '',
             path_names: {
               sign_in: '/api/v1/login',
               sign_out: '/api/v1/logout',
               registration: '/api/v1/signup'
             },
             controllers: {
               sessions: 'api/v1/sessions',
               registrations: 'api/v1/registrations'
             }

  namespace :api do
    namespace :v1 do
      resources :doctors, only: [:index]
    end
  end

  get '*path', to: 'pages#index', via: :all
end
