require 'spec_helper'

describe API::Pivotal do

  describe :campaign do

    before(:all) do
      @pivotal = API::Pivotal.new PIVOTAL['token']
    end

    it "should return pivotal campaign when given project id" do
      campaign = @pivotal.campaign(PIVOTAL['project'])
      campaign.name.should match(/FTW Sandbox/)
    end


  end

end