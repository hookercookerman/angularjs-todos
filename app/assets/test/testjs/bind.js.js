(function() {
  (function(window, previousOnLoad) {
    return window.onload = function() {
      try {
        (previousOnLoad || angular.noop)();
      } catch (error) {

      }
      return angular.compile(window.document)();
    };
  })(window, window.onload);
}).call(this);
