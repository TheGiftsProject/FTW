require "klass"

class Character < ActiveRecord::Base
  attr_accessible :avatar, :klass, :name, :token, :project_id

  enum :klass, [:ruby, :js, :web]

  before_create :init_char


  private

  def init_char
    self.level = 1
    self.exp = 0

  end
end
