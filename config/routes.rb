FTW::Application.routes.draw do

  resource :session

  root :to => 'pages#landing'

end
