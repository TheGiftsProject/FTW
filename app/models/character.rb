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

  def start_quest(quest_id)
    quest = API::Pivotal.new(token).campaign(project_id).quest(quest_id)
    quest.start!
  end

  def finish_quest(quest_id)
    quest = API::Pivotal.new(token).campaign(project_id).quest(quest_id)
    quest.finish!

    if quest.estimation.nil? or quest.estimation < 0
      self.exp += 15
    else
      self.exp += 2**quest.estimation + 10
    end

    self.exp + 200

    while self.exp > needed_exp
      self.level += 1
    end
    save!
  end

  def exp_percent
    this_level_exp = exp - Character.needed_exp(level - 1)
    this_level_need = needed_exp - Character.needed_exp(level - 1)
    percent = this_level_exp * 100 / this_level_need
  end

  def quests
    API::Pivotal.new(token).campaign(project_id).quests.reject do |quest|
      not ["started", "unscheduled"].include? quest.state
    end
  end

  private

  def init_char
    self.level = 1
    self.exp = 0
  end



end
