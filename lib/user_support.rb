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

  def current_character
    Character.find_by_token(current_user)
  end

  def has_character?
    current_character.present?
  end

end