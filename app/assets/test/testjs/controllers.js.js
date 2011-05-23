(function() {
  var TodosController;
  this.TodosController = TodosController = (function() {
    function TodosController(todos) {
      this.todos = todos != null ? todos : [];
      this.allCompleted = false;
    }
    TodosController.prototype.addTodo = function(newTodo) {
      if (newTodo.title.length) {
        newTodo = angular.copy(newTodo);
        newTodo.compeleted = false;
        this.todos.push(newTodo);
        return this.todo.title = "";
      }
    };
    TodosController.prototype.markAllCompleted = function() {
      var todo, _i, _len, _ref, _results;
      _ref = this.todos;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        todo = _ref[_i];
        _results.push(todo.compeleted = this.allCompleted);
      }
      return _results;
    };
    TodosController.prototype.remaining = function() {
      return angular.Array.count(this.todos, "compeleted==false");
    };
    TodosController.prototype.clearCompletedTodos = function() {
      var todo, _i, _len, _ref;
      _ref = angular.Array.filter(this.todos, {
        "compeleted": true
      });
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        todo = _ref[_i];
        angular.Array.remove(this.todos, todo);
      }
      return this.allCompleted = false;
    };
    TodosController.prototype.toggleTodo = function(todo) {
      return todo.compeleted = !todo.compeleted;
    };
    return TodosController;
  })();
}).call(this);
