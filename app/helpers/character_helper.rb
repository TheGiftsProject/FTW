module CharacterHelper
  def display_class(character)
    Klasses::All.each do |x|
      return x.name if x.id == character.klass
    end
    return "Unknown"
  end

  def exp_bar_attr(character)
    {:style => "width: #{character.exp_percent}%", :data => {:exp => character.exp }}
  end
end