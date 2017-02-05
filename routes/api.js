var express = require('express');
var router = express.Router();
const controller = require('../controllers/todo');

router.get('/todos', controller.read)

router.post('/todos/add', controller.add)

router.delete('/todos/delete', controller.delete)

router.put('/todos/update', controller.update)

module.exports = router;
