class SessionsController < ApplicationController
  def create
      client = login(params[:name], params[:password])
      flash[:info] = "hello #{client.inspect}"
      redirect_to "/"
  end


  def login(user, pass)
    PivotalTracker::Client.token(user, pass)
  rescue RestClient::Unauthorized
    nil
  end
end