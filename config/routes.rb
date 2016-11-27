Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
  end
  get 'api/summoners/:name', to: 'summoners#find_or_create'
  get 'api/matches/:limit/:offset', to: 'matches#fetch'
  root to: 'static_pages#root'
end
