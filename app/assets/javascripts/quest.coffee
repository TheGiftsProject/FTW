class QuestLog
  constructor: ->
    @el = $(".quest_log")
    that = @
    @el.find('.btn').click(
      -> that.buttonPressed($(@).parents("li"))
    )

  buttonPressed: (element) ->
      id = element.data('id')
      action = element.data('action')
      url = element.data('url')
      window.hub.apply(action)





$().ready( =>
    window.questLog= new QuestLog()
)
