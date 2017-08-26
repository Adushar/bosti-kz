Rails.application.routes.draw do
  devise_for :users
  mount RailsAdmin::Engine => '/admin', :as => 'rails_admin'
  resources :questions
  root 'main#home'
  get '/service', to: 'main#service'
  get '/questions', to: 'questions#index'
  get '/contact', to: 'main#contact'
  get '/partners', to: 'main#partners'
end
