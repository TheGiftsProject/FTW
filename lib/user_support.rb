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

  def login(options = {})
    if options[:token].present?
      PivotalTracker::Client.token = options[:token]

      API::Pivotal.new(current_user).campaigns # Try and get the campaings

      return options[:token]
    else
      return PivotalTracker::Client.token(options[:user], options[:pass])
    end
  rescue RestClient::Unauthorized
    nil
  end

end