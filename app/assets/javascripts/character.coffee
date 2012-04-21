class CharacterView
  constructor: ->
    @el = $(".character-view")
    @ui =
      level: @el.find(".level")
      exp: @el.find(".exp")
    @level = @ui.level.text()

  updateUser: (exp_percentage, level) ->
    if (parseInt(@level) == level)
      @ui.exp.css("width", "#{exp_percentage}%")
      @ui.level.text(level)
      @level = level
    else
      console.log("whole level")
      @ui.exp.css("width", "100%")
      setTimeout(
        =>
          @level = parseInt(@level) + 1
          @ui.level.text(@level)
          @ui.exp.removeClass("anim")
          @ui.exp.css("width", "0%")
          setTimeout(
            =>
              @ui.exp.addClass("anim")
              @updateUser(exp_percentage, level)
            50
          )
        1000
      )






$().ready( =>
    window.characterView = new CharacterView()
)
