require 'user_support'

class ApplicationController < ActionController::Base
  protect_from_forgery

  include UserSupport
  helper_method :current_user, :user_signed_in?

  before_filter :load_character

  def load_character
    @current_character = nil

    if user_signed_in? && has_character?
      @current_character = current_character
    end
  end
end
