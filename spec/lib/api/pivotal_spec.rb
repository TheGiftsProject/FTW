require 'spec_helper'

describe API::Pivotal do

  before(:all) do
    @pivotal = API::Pivotal.new PIVOTAL['token']
  end

  describe :campaigns do
    it "should retrieve all campaigns" do
      campaigns = @pivotal.campaigns
      campaigns.each {|campaign| puts campaign.name}
    end
  end

  describe :campaign do

    it "should return pivotal campaign when given project id" do
      campaign = @pivotal.campaign(PIVOTAL['project'])
      campaign.name.should match(/FTW Sandbox/)
    end

  end

end