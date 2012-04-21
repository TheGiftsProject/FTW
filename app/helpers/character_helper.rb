module CharacterHelper
  def display_class(character)
    Klasses::All.each do |x|
      return x.name if x.id == character.klass
    end
    return "Unknown"
  end
end