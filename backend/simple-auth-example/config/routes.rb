Rails.application.routes.draw do
  root to: "health_check#index"

  namespace :api, defaults: { format: :json } do
    mount_devise_token_auth_for 'User', at: 'auth'

    resources :tasks, only: [:index, :show]
  end

  resources :health_check, only: [:index]
end
