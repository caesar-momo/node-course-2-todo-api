const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5b2ba4e362613309a8e5c3dd';

Todo.find({
  _id: id
}).then((todos) => {
  console.log(('Todos',todos));
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log(('Todo',todo));
});

Todo.findById(id).then((todo) => {
  console.log('Todo By Id', todo);
});
