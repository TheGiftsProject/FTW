require 'spec_helper'

describe API::PivotalCampaign do

  before(:all) do
    pivotal = API::Pivotal.new PIVOTAL['token']
    @campaign = pivotal.campaign(PIVOTAL['project'])
  end

  describe :quest do
    it "should retrieve pivotal quest when given story id" do
      quest = @campaign.quest(28399437)
      quest.name.should == "test story"
    end
  end

  describe :quests do
    it "should return all stories" do
      @campaign.quests.each {|quest| puts quest.name }
    end
  end


end