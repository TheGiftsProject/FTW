require 'spec_helper'

describe API::PivotalQuest do

  before(:all) do
    @pivotal = API::Pivotal.new PIVOTAL['token']
    @campaign = @pivotal.campaign(PIVOTAL['project'])
  end

  before(:each) do
    project = PivotalTracker::Project.find(PIVOTAL['project'])
    @story = project.stories.create(:name => "My Test Story",
                                  :story_type => "feature",
                                  :labels => "bozaglo blat",
                                  :estimate => 3)
    @quest = @campaign.quest(@story.id)
  end

  after(:each) do
    @story.delete
  end

  describe :labels do
    it "should return the quest labels" do
      @quest.labels.should include("bozaglo")
    end
  end

  describe :estimate! do
    it "should change quest estimation" do
      expect {
        @quest.estimate! 0
      }.should change(@quest, :estimation).to(0)
    end
  end


  describe :start! do
    it "should change quest status to started" do
      expect {
        @quest.start!
      }.should change(@quest, :state).to("started")
    end
  end

  describe :finish! do
    it "should change quest status to completed" do
      expect {
        @quest.finish!
      }.should change(@quest, :state).to("finished")
    end
  end

  describe :deliver! do
    it "should change quest state to delivered" do
      expect {
        @quest.deliver!
      }.should change(@quest, :state).to("delivered")
    end
  end

  describe :accept! do
    it "should change quest state to accepted" do
      expect {
        @quest.accept!
      }.should change(@quest, :state).to("accepted")
    end
  end

  describe :label! do
    it "should add a new label" do
      @quest.label! %w[new_label"]
      @quest.labels.should include("new_label", "bozaglo", "blat")
    end
  end

end