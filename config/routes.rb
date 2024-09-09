Rails.application.routes.draw do
   get 'registers/list', to: 'registers#list', as: 'list_register'
   root'registers#index'
   resources :registers
end
