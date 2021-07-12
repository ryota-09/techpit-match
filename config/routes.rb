Rails.application.routes.draw do
  devise_for :users,
    controllers: {registrations: 'registrations'}
  get 'top/index'
  root 'top#index'

  resources :users, only:[:show,:index]
end
