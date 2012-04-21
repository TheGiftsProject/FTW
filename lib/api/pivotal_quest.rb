class API::PivotalQuest

  def initialize(pivotal_story)
    @pivotal_story = pivotal_story
  end

  def name
    @pivotal_story.name
  end

  def start!
    @pivotal_story.update(:current_state => "started")
  end

  def finish!
    @pivotal_story.update(:current_state => "finished")
  end

  def estimate(points)
    @pivotal_story.update(:estimate => points)
  end

  def deliver

  end

  def accept

  end

  def label(labels)
    @pivotal_story.update(:labels => labels.join(" "))
  end



end