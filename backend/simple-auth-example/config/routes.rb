Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  root to: "health_check#index"

  namespace :api, defaults: { format: :json } do
    resources :tasks, only: [:index]
  end

  resources :health_check, only: [:index]
end
