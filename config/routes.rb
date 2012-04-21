FTW::Application.routes.draw do

  resource :session

  match "dashboard" => "pages#dashboard", :as => "dashboard"
  match "debug" => "pages#debug", :as => "debug"
  root :to => 'pages#landing'

end
