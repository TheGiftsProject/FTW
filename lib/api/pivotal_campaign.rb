class API::Pivotal::Campaign

  include PivotalTracker

  def initialize(pivotal_project)
    @pivotal_project = pivotal_project
  end

  def quest(id)
    # wrap pivotal story in a quest object
  end

end