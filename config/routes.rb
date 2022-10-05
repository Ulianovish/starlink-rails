Rails.application.routes.draw do
  get 'index/index'
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"

  get '/starlinks', to: "starlink#get_starlinks"
  resources :starlink
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "index#index"
end
