module CharacterHelper
  def display_class(character)
    Klasses::All.each do |x|
      return x.name if x.id == character.klass
    end
    return "Unknown"
  end

  def exp_bar_attr(character)
    this_level_exp = character.exp - Character.needed_exp(character.level - 1)
    this_level_need = character.needed_exp - Character.needed_exp(character.level - 1)
    percent = this_level_exp* 100 / this_level_need
    {:style => "width: #{percent}%"}
  end
end