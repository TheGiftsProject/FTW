class CharacterController < ApplicationController

  authenticate

  before_filter :load_character, :only => [:show, :start_quest, :finish_quest]

  def new
    @campaigns = API::Pivotal.new(current_user).campaigns
  end

  def create
    character = Character.new(params[:character])
    if character.valid?
      character.save!
      redirect_to dashboard_path
    else
      flash[:error] = character.errors.inspect
      redirect_to new_character_path
    end
  end

  def show

  end

  def start_quest
    @character.start_quest(params[:quest_id])
    render :json => {:blah => 3}
  end

  def finish_quest
    @character.finish_quest(params[:quest_id])
    render :json => {:level => @character.level, :exp_percent => @character.exp_percent}
  end

  private

  def load_character
    @character = Character.find(params[:id])
    redirect_to "403" and return :rendered if @character.nil? or @character != current_character
  end


end