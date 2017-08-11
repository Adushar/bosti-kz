Rails.application.routes.draw do
  devise_for :users
  mount RailsAdmin::Engine => '/admin', :as => 'rails_admin'
  root 'main#home'
  get '/service', to: 'main#service'
  get '/questions', to: 'main#questions'
  get '/contact', to: 'main#contact'
  get '/partners', to: 'main#partners'
end
