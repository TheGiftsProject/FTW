module UserSupport

  def sign_in(user)
    session[:user_token] = user
  end

  def sign_out
    session[:user_token] = nil
  end

  def user_signed_in?
    current_user.present?
  end

  def current_user
    session[:user_token]
  end

end