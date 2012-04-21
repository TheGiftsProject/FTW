require 'spec_helper'

describe Character do
  describe :needed_exp do
    it "should return 0 for level 0" do
      Character.needed_exp(0).should == 0
    end

    it "should return needed exp for given level" do
      Character.needed_exp(1).should == 128
      Character.needed_exp(2).should == 256
      Character.needed_exp(3).should == 512
    end

  end
end
