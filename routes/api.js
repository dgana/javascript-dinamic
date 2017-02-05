var express = require('express');
var router = express.Router();
const controller = require('../controllers/todo');

router.get('/todos', controller.read)

router.post('/todos/add', controller.add)

router.delete('/', controller.delete)

router.put('/', controller.update)

// router.get('/todos', function(req, res, next) {
//   models.Todo.findAll({raw: true}).then(function(todos){
//     res.json(todos);
//   })
// });

// router.post('/todos/add', function(req, res, next) {
//   models.Todo.create({title: req.body.title, completed: false}).then(function(todo){
//     res.json(todo);
//   })
// });

module.exports = router;
