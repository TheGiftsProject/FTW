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
      project = PivotalTracker::Project.find(id.to_i)
      API::PivotalCampaign.new project
    end

  end
end