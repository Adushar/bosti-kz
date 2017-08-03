Rails.application.routes.draw do
  root 'main#home'
  get '/service', to: 'main#service'
  get '/questions', to: 'main#questions'
  get '/contact', to: 'main#contact'
end
