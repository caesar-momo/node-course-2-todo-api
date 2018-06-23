// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connect to MongoDB server');

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5b2c277d9d1b2d2898097d33')
  },{
    $set: {
      name: 'Andrew'
    }
  },
  $inc:{
    age:1
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })

  // db.close();
});
