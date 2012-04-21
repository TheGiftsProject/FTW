module API
  class PivotalCampaign

    include PivotalTracker

    def initialize(pivotal_project)
      @pivotal_project = pivotal_project
    end

    def name
      @pivotal_project.name
    end

    def quest(id)
      API::PivotalQuest.new @pivotal_project.stories.find(id)
    end

  end
end