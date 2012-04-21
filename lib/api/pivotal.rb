module API
  class Pivotal

    # based on https://github.com/jsmestad/pivotal-tracker

    include PivotalTracker

    def initialize(token)
      PivotalTracker::Client.token = token
    end

    def campaigns
      campaigns = []
      PivotalTracker::Project.all.each { |project| campaigns << API::PivotalCampaign.new(project) }
      campaigns
    end

    def campaign(id)
      # wrap pivotal project in a campaign object
      project = PivotalTracker::Project.find(id)
      API::PivotalCampaign.new project
    end

  end
end