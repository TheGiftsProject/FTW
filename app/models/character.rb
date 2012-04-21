require "klass"

class Character < ActiveRecord::Base
  attr_accessible :avatar, :klass, :name, :token, :project_id

  enum :klass, [:ruby, :js, :web]

  before_create :init_char

  def self.needed_exp(level)
    return 0 if level == 0
    2**(level+6)
  end

  def needed_exp
    Character.needed_exp(self.level)
  end



  private

  def init_char
    self.level = 1
    self.exp = 0
  end



end
