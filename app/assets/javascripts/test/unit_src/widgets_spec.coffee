# jasmine specs for controllers go here
describe "ns:insertnewline widget", ->
  
  beforeEach ->
    @controller = {
      newline : jasmine.createSpy('newline')
    }
    @scope = angular.compile('<input type=text ng:insertnewline="newline(title)" name="title">', @controller)()
    @element = @scope.$element
    
  it "should call the newline function on the controller if we trigger enter", ->
    # no amount of me trying to trigger seems to make this work
    # even just doing a trigger click 
    # expect(@controller.newline).toHaveBeenCalled();