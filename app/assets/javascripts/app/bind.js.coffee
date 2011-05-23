((window, previousOnLoad) ->
  window.onload = ->
    try
      (previousOnLoad||angular.noop)()
    catch error
    angular.compile(window.document)()
)(window, window.onload)