require 'spec_helper'

describe API::Pivotal do

  describe :campaign do

    before(:all) do
      @pivotal = API::Pivotal.new PIVOTAL['token']
    end

    it "should return pivotal campaign when given project id" do
      campaign = @pivotal.campaign(PIVOTAL['project'])
      puts "campaign class: #{campaign.class}"
      campaign.name.should match(/eBay Group Gifts/)
    end


  end

end