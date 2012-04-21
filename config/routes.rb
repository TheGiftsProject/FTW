FTW::Application.routes.draw do

  resource :session
  resources :character

  match "dashboard" => "pages#dashboard", :as => "dashboard"
  root :to => 'pages#landing'

end
