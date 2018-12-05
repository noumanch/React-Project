const express = require("express");
const port = process.env.PORT || 3000;
const MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser')
const app = express();
const db = require("./key").mongoURI
var dbase;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect(db)
  .then(() => console.log('Mongo OK'))
  .catch(err => console.log(err));
//Routes
var router = express.Router();

var testapi = require("./testapi")

app.use('./testapi', testapi);

MongoClient.connect('mongodb://nouman:punjabi1@ds047114.mlab.com:47114/mytinerary', (err, db) => {
  dbase = db.db("mytinerary");
  if (err) return console.log(err)



  app.listen(3000, () => {
    console.log('app working on 3000')
  })
})





// const express = require('express');
// const bodyParser = require('body-parser')
// const app = express();
// const db = require("./key").mongoURI
// app.get('/cities', (req, res) => {
//   db.collection('cities').find().toArray((err, results) => {
//     res.send(results)
//   });
// });
//
// const mongoose = require('mongoose');
// var Schema = mongoose.Schema;
//
//
//
// class Database {
//   constructor() {
//     this._connect()
//   }
//
//   _connect() {
//     mongoose.connect(db)
//       .then(() => {
//         console.log('Database connection successful')
//       })
//       .catch(err => {
//         console.error('Database connection error')
//       })
//   }
// }
// // module.exports = new Database()
//
//
// app.get('/cities', (req, res) => {
//   db.collection('cities').find().toArray((err, results) => {
//     res.send(results)
//   });
// });
// app.post('/name/add', (req, res, next) => {
//
//   var personSchema = new Schema({
//     name: {
//       first: String,
//       last: String
//     }
//   });
//
//
//   db.collection("name").save(name, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//
//     res.send('name added successfully');
//   });
// });
// // we'll create routes here
// var router = express.Router();
//
// router.get('/', function(req, res) {
//   res.send('im the home page!');
// });
//
// router.get('/test', function(req, res) {
//   res.send('Hello World!' + ' ' + 'Test Works');
// });
//
// app.use('/', router);
//
// const MongoClient = require('mongodb').MongoClient
// var ObjectID = require('mongodb').ObjectID;
// MongoClient.connect('mongodb://nouman:punjabi1@ds047114.mlab.com:47114/mytinerary', (err, db) => {
//   var dbase = db.db("crud");
//   if (err) return console.log(err)
//   app.listen(3000, () => {
//     console.log('app working on 3000')
//   })
//
// })
// //Start the Server
// //app.listen(port);
// //console.log('Magic happens on port' + port);