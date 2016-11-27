Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :summoners, only: [:show]
  end
  get 'api/matches/:limit/:offset', to: 'matches#fetch'
  root to: 'static_pages#root'
end
