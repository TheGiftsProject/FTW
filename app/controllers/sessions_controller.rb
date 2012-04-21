class SessionsController < ApplicationController
  def create
    client = login(params.slice(:name, :password, :token))

    if client.present?
      sign_in(client)
      redirect_to dashboard_path
    else
      flash[:error] = "Wrong username or password"
      redirect_to "/"
    end
  end
end