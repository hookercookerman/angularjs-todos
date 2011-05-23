(function() {
  angular.directive("ng:insertnewline", function(expression, element) {
    return function(element) {
      var scope;
      scope = this;
      return element.bind("keyup", function(event) {
        if (event.keyCode === 13) {
          scope.$tryEval(expression, element);
          return scope.$root.$eval();
        }
      });
    };
  });
}).call(this);
