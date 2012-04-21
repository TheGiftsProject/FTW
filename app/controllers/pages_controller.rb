class PagesController < ApplicationController

  before_filter :must_be_logged_in, :only => [:dashboard]

  def landing
    redirect_to dashboard_path if has_character?
  end

  def dashboard
    redirect_to new_character_path unless has_character?


  end


  private

  def must_be_logged_in
    unless user_signed_in?
      redirect_to '/'
    end
  end
end