Rails.application.routes.draw do
  get '/welcome', to: 'welcome#index'
  get '/dot_todos', to: 'dot_todos#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
