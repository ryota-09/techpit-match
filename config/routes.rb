Rails.application.routes.draw do
  devise_for :users,
    controllers: {registrations: 'registrations',sessions:'sessions'}
  get 'top/index'
  root 'top#index'

  resources :users, only:[:show,:index]
end
