@TodosController = class TodosController
  constructor: (@todos = []) ->
    @allCompleted = false
    
  addTodo: (newTodo)->
    if newTodo.title.length
      newTodo = angular.copy(newTodo)
      newTodo.completed = false
      @todos.push(newTodo)
      @todo?.title = ""
      
  markAllCompleted: ->
    for todo in @todos
      todo.completed = @allCompleted 
    
  remaining: ->
    angular.Array.count(@todos, "completed==false")
    
  clearCompletedTodos: ->
    for todo in angular.Array.filter(@todos, {"completed" : true})
      angular.Array.remove(@todos, todo)
    @allCompleted = false
  
  toggleTodo: (todo)->
    todo.completed = !todo.completed
    
    