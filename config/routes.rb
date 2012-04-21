FTW::Application.routes.draw do

  resource :session
  resources :character do
    member do
      get :start_quest
      get :finish_quest
    end

  end

  match "dashboard" => "pages#dashboard", :as => "dashboard"
  match "debug" => "pages#debug", :as => "debug"
  match "logout" => "pages#logout", :as => :logout
  root :to => 'pages#landing', :as => :landing

end
