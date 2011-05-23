(function() {
  describe("TodosController", function() {
    beforeEach(function() {
      this.scope = angular.scope();
      this.$browser = this.scope.$service('$browser');
      return this.controller = this.scope.$new(TodosController);
    });
    it("should default to creating empty todos and allCompleted of false ", function() {
      expect(this.controller.todos).toEqual([]);
      return expect(this.controller.allCompleted).toEqual(false);
    });
    describe("#addTodo", function() {
      this.todo;
      beforeEach(function() {
        this.todo = {
          "title": "beans"
        };
        return this.controller.addTodo(this.todo);
      });
      it("should add the todo to the todos", function() {
        return expect(this.controller.todos.length).toEqual(1);
      });
      return it("should not be completed", function() {
        return expect(this.controller.todos[0]["Completed"]).toBeFalsy();
      });
    });
    describe("#toggleTodo; when newly created", function() {
      this.todo;
      beforeEach(function() {
        this.todo = {
          "title": "beans"
        };
        this.controller.addTodo(this.todo);
        return this.todo = this.controller.todos[0];
      });
      return it("should not be completed", function() {
        this.controller.toggleTodo(this.todo);
        return expect(this.todo.completed).toBeTruthy();
      });
    });
    describe("#markAllCompleted; when we have 3 uncompleted todos", function() {
      beforeEach(function() {
        var todo, todos, _i, _len;
        todos = [
          {
            "title": "beans1"
          }, {
            "title": "beans2"
          }, {
            "title": "beans3"
          }
        ];
        for (_i = 0, _len = todos.length; _i < _len; _i++) {
          todo = todos[_i];
          this.controller.addTodo(todo);
        }
        return this.controller.allCompleted = true;
      });
      return it("should all be compeleted", function() {
        var todo, _i, _len, _ref, _results;
        this.controller.markAllCompleted();
        _ref = this.controller.todos;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          todo = _ref[_i];
          _results.push(expect(todo.completed).toBeTruthy());
        }
        return _results;
      });
    });
    return describe("#remaining; when only 1 task has been completed out of 3", function() {
      beforeEach(function() {
        var todo, todos, _i, _len;
        todos = [
          {
            "title": "beans1"
          }, {
            "title": "beans2"
          }, {
            "title": "beans3"
          }
        ];
        for (_i = 0, _len = todos.length; _i < _len; _i++) {
          todo = todos[_i];
          this.controller.addTodo(todo);
        }
        return this.controller.todos[0].completed = true;
      });
      return it("should be 2", function() {
        return expect(this.controller.remaining()).toEqual(2);
      });
    });
  });
}).call(this);
