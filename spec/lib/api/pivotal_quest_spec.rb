require 'spec_helper'

describe API::PivotalQuest do

  before(:all) do
    pivotal = API::Pivotal.new PIVOTAL['token']
    campaign = pivotal.campaign(PIVOTAL['project'])
    @quest = campaign.quest(28399437)
  end

  describe :start! do
    it "should change quest status to started" do
      #expect {
        @quest.start!
      #@quest.estimate
      #}.should change(@quest, :state).to("started")
    end
  end

  describe :finish! do
    it "should change quest status to completed" do
      @quest.finish!
    end
  end

  describe :estimate do
    it "should change quest estimation" do
      #expect {
      #  @quest.estimate 0
      #}.should change(@quest)
    end
  end

end