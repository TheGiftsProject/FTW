class APIs::Pivotal

  # based on https://github.com/jsmestad/pivotal-tracker

  include PivotalTracker

  def init(token)
    PivotalTracker::Client.token = token
  end

  def projects
    PivotalTracker::Project.all
  end
end