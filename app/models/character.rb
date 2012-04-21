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

  def finished_quest(quest)
    if quest.estimation.nil? or quest.estimation < 0
      self.exp += 15
    else
      self.exp += 2**quest.estimation + 10
    end

    while self.exp > needed_exp
      self.level += 1
    end
    save!
  end

  def quests
    API::Pivotal.new(token).campaign(project_id).quests.accept do |quest|
      ["started", "unscheduled"].include? quest.status
    end
  end

  private

  def init_char
    self.level = 1
    self.exp = 0
  end



end
