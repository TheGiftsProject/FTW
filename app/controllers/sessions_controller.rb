class SessionsController < ApplicationController
  def create
      client = login(params[:name], params[:password])
      if client.present?
        sign_in(client)
        redirect_to dashboard_path
      else
        flash[:error] = "Wrong username or password"
        redirect_to "/"
      end
  end


  def login(user, pass)
    PivotalTracker::Client.token(user, pass)
  rescue RestClient::Unauthorized
    nil
  end
end