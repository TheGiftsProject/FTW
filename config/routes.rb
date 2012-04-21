FTW::Application.routes.draw do

  resource :session

  match "dashboard" => "pages#dashboard", :as => "dashboard"
  root :to => 'pages#landing'

end
