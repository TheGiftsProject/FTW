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


  def login(options = {})
    if options[:token].present?
      PivotalTracker::Client.token = options[:token]

      PivotalTracker::Project.all

      return options[:token]
    else
      return PivotalTracker::Client.token(options[:user], options[:pass])
    end
  rescue RestClient::Unauthorized
    nil
  end
end