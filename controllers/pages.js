const Todos = require('../models/todos');

module.exports = {
  read: (req, res) => {
    res.render('index', { title: 'Todo List App'})
  }
}
