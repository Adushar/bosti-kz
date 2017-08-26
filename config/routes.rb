Rails.application.routes.draw do
  devise_for :users
  mount RailsAdmin::Engine => '/admin', :as => 'rails_admin'
  resources :questions
  resources :service
  root 'main#home'
  get '/service', to: 'service#index'
  get '/questions', to: 'questions#index'
  get '/contact', to: 'main#contact'
  get '/partners', to: 'main#partners'
end
