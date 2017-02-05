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
      res.json(todo)
    });
  },
  // update: (req, res) => {
  //   Todos.findByIdAndUpdate(req.body.id, { completed: true }, function(err, todo) {
  //     if (err) throw err;
  //
  //     // we have the updated todo returned to us
  //     res.json(todo)
  //   });
  // },
  update: (req, res) => {
    let bool = true;

    Todos.findOne({ _id: req.body.id }, function(err, todo) {
      if (err) throw err;
      if(todo.completed) {
        bool = false;
      }
      // we have the updated todo returned to us
      Todos.update({ _id: req.body.id}, {$set:{completed: bool}}, function(err, result) {
        res.json(todo)
      });
    });
  }
}
