Rails.application.routes.draw do
  devise_for :users
  get 'top/index'
end
