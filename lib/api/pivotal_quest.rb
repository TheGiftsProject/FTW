class API::PivotalQuest

  def initialize(pivotal_story)
    @pivotal_story = pivotal_story
  end

  def name
    @pivotal_story.name
  end

  def start!
    debugger
    @pivotal_story.update(:state => "started")
    #@pivotal_story.start!
  end

  def finish!
    @pivotal_story.update(:complete => true)
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