var express = require('express');
var router = express.Router();
var models = require('../models/todos')
const controller = require('../controllers/pages')

/* GET home page. */
router.get('/', controller.read)

// router.post('/', function(req, res, next) {
//   models.Todo.create({title: req.body.title, completed: false}).then(function(todo){
//     res.redirect("/");
//   })
// });



module.exports = router;
