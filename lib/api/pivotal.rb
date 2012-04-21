class API::Pivotal

  # based on https://github.com/jsmestad/pivotal-tracker

  include PivotalTracker

  def initialize(token)
    PivotalTracker::Client.token = token
  end

  def campaigns
    # wrap all pivotal projects into a campaign object
  end

  def campaign(id)
    # wrap pivotal project in a campaign object
  end

end