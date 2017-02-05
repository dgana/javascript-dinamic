const Todos = require('../models/todos');

module.exports = {
  add: (req, res) => {
    let newTodo = Todos({
      todo: req.body.todo,
      completed: false,
      created_at: new Date(),
      updated_at: new Date()
    });

    // save todo
    newTodo.save(function(err, todo) {
      if (err) throw err;
      res.json(todo);
    });
  },
  read: (req, res) => {
    // get all the users
    Todos.find({}, function(err, todos) {
      if (err) throw err;

      // object of all todo
      res.json(todos)
    });
  },
  delete: (req, res) => {
    Todos.findByIdAndRemove(req.body.id, function(err, todo) {
      if (err) throw err;

      // delete todo
      res.send(`Todos: ${todo.todo} deleted!`);
    });
  },
  update: (req, res) => {
    Todos.findByIdAndUpdate(req.body.id, { todo: req.body.todo }, function(err, todo) {
      if (err) throw err;

      // we have the updated todo returned to us
      res.send(todo);
    });
  }
}
