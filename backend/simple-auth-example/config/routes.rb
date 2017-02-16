Rails.application.routes.draw do
  root to: "health_check#index"

  resources :tasks, only: [:index]
  resources :health_check, only: [:index]
end
