angular.directive "ng:insertnewline", (expression, element) ->
  (element) ->
    scope = @
    element.bind "keyup", (event) ->
      if event.keyCode == 13
        scope.$tryEval(expression, element)
        scope.$root.$eval()