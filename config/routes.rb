Rails.application.routes.draw do
  root 'main#home'
  get '/service', to: 'main#service'
end
