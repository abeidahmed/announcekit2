Rails.application.routes.draw do
  namespace :v1 do
    resources :users, only: %i[create]
    resource :sessions, only: %i[create show]
  end
end
