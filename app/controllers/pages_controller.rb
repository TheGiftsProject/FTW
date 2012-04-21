class PagesController < ApplicationController

  before_filter :must_be_logged_in, :only => [:dashboard]

  def landing
  end

  def dashboard


  end


  private

  def must_be_logged_in
    unless user_signed_in?
      redirect_to '/'
    end
  end
end