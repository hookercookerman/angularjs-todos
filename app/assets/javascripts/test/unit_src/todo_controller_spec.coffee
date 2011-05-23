# jasmine specs for controllers go here
describe "TodosController", ->
  
  beforeEach ->
    @scope = angular.scope()
    @$browser = @scope.$service('$browser')
    
    @controller = @scope.$new(TodosController)
    
  it "should default to creating empty todos and allCompleted of false ", ->
    expect(@controller.todos).toEqual([])
    expect(@controller.allCompleted).toEqual(false)
  
  describe "#addTodo", ->
    @todo
    beforeEach ->
      @todo = {"title" : "beans"}
      @controller.addTodo(@todo)
    
    it "should add the todo to the todos", ->
      expect(@controller.todos.length).toEqual(1)
    
    it "should not be completed", ->
      expect(@controller.todos[0]["Completed"]).toBeFalsy()
      
  describe "#toggleTodo; when newly created", ->
    @todo
    beforeEach ->
      @todo = {"title" : "beans"}
      @controller.addTodo(@todo)
      @todo = @controller.todos[0]

    it "should not be completed", ->
      @controller.toggleTodo(@todo)
      expect(@todo.completed).toBeTruthy()
      
  describe "#markAllCompleted; when we have 3 uncompleted todos", ->
    beforeEach ->
      todos = [{"title" : "beans1"}, {"title" : "beans2"}, {"title" : "beans3"}]
      for todo in todos
        @controller.addTodo(todo)
      @controller.allCompleted = true
      
    it "should all be compeleted", ->
      @controller.markAllCompleted()
      for todo in @controller.todos
        expect(todo.completed).toBeTruthy()
  
  describe "#remaining; when only 1 task has been completed out of 3", ->
    beforeEach ->
      todos = [{"title" : "beans1"}, {"title" : "beans2"}, {"title" : "beans3"}]
      for todo in todos
        @controller.addTodo(todo)
      @controller.todos[0].completed = true
    
    it "should be 2", ->
      expect(@controller.remaining()).toEqual(2)
    
  
    