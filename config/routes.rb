Rails.application.routes.draw do
  get '/welcome', to: 'welcome#index'
  get '/dot_todos', to: 'dot_todos#index'
  get '/board_game', to: 'board_game#index'
  get '/questions', to: 'questions#index'
  get '/redux_example', to: 'redux_example#index'
  get '/redux_counter', to: 'redux_counter#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
