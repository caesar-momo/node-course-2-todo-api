const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {
  console.log(result);
})

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5b2c2830056114c58d56aa0a'}).then((todo) => {
  
})

Todo.findByIdAndRemove('5b2c2830056114c58d56aa0a').then((todo) => {
  console.log(todo);
})
