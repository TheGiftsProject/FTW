module UserSupport

  def authenticate_user
    redirect_to landing_path user_signed_in?
  end

  def sign_in(user)
    session[:user_token] = user
    load_character
  end

  def sign_out
    session[:user_token] = nil
    load_character
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

  def login(options = {})
    if options[:user].present?
      return PivotalTracker::Client.token(options[:user], options[:password])

    else
      PivotalTracker::Client.token = options[:token]

      API::Pivotal.new(options[:token]).campaigns # Try and get the campaings

      return options[:token]
    end

  rescue RestClient::Unauthorized
    return nil
  rescue PivotalTracker::Client::NoToken
    return nil
  end

end