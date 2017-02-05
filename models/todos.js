const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
var todosSchema = new Schema({
  todo: {
    type: String,
    required: true,
    unique: true
  },
  completed: Boolean,
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
const Todos = mongoose.model('Todos', todosSchema);

// make this available to our users in our Node applications
module.exports = Todos;
