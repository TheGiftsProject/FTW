require 'spec_helper'

describe API::Pivotal do

  describe :campaign do

    before(:all) do
      token = "7b142a77459170686bbf6d93d082367f"
      @pivotal = API::Pivotal.new token
    end

    it "should return pivotal campaign when given project id" do
      campaign = @pivotal.campaign(401411)
      campaign.name.should match(/eBay Group Gifts/)
    end
  end

end