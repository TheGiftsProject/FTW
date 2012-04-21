class API::PivotalQuest

  def initialize(pivotal_story)
    @pivotal_story = pivotal_story
  end

  def owner?
    @pivotal_story.owned_by == "current user name"
  end

  def name
    @pivotal_story.name
  end

  def state
    @pivotal_story.current_state
  end

  def labels
    @pivotal_story.labels
  end

  def estimation
    @pivotal_story.estimate
  end

  def start!
    @pivotal_story.update(:current_state => "started")
  end

  def finish!
    @pivotal_story.update(:current_state => "finished")
  end

  def estimate!(points)
    @pivotal_story.update(:estimate => points)
  end

  def deliver!
    @pivotal_story.update(:current_state => "delivered")
  end

  def accept!
    @pivotal_story.update(:current_state => "accepted")
  end

  def label!(labels)
    labels << self.labels
    @pivotal_story.update(:labels => labels.join(" "))
  end



end