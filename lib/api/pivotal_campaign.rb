module API
  class PivotalCampaign

    include PivotalTracker

    def initialize(pivotal_project)
      @pivotal_project = pivotal_project
    end

    def ref_id
      @pivotal_project.id
    end

    def name
      @pivotal_project.name
    end

    def quest(id)
      API::PivotalQuest.new @pivotal_project.stories.find(id)
    end

    def quests
      @pivotal_project.stories.map do |story|
        API::PivotalQuest.new story
      end
    end

  end
end