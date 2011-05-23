(function() {
  describe("ns:insertnewline widget", function() {
    beforeEach(function() {
      this.controller = {
        newline: jasmine.createSpy('newline')
      };
      this.scope = angular.compile('<input type=text ng:insertnewline="newline(title)" name="title">', this.controller)();
      return this.element = this.scope.$element;
    });
    return it("should call the newline function on the controller if we trigger enter", function() {});
  });
}).call(this);
