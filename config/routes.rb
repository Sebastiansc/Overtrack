Rails.application.routes.draw do
  get 'api/rankings/:tier', to: 'api/rankings#index'
  get 'api/summoners/:name', to: 'api/summoners#find_or_create'
  get 'api/matches/:summoner_id/:offset/:limit', to: 'api/matches#next_batch'
  root to: 'static_pages#root'
end
