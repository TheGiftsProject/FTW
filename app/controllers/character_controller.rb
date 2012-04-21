class CharacterController < ApplicationController
  def new
    @campaigns = API::Pivotal.new(current_user).campaigns
  end

  def create
    character = Character.new(params[:character])
    if character.valid?
      character.save!
      redirect_to character_path(character)
    else
      flash[:error] = character.errors.inspect
      redirect_to new_character_path
    end
  end

  def show

  end
end