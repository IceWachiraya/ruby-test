Rails.application.routes.draw do
  resources :registers
  # get "up" => "rails/health#show" , as: :rails_health_check
  root"registers#new"
end
