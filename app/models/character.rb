require "klass"

class Character < ActiveRecord::Base
  attr_accessible :avatar, :klass, :email, :exp, :gender, :level, :name, :token

  enum :klass, [:ruby, :js, :web]
end
