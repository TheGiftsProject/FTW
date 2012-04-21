require 'user_support'

class ApplicationController < ActionController::Base
  protect_from_forgery

  include UserSupport
  helper_method :current_user, :user_signed_in?
end
