const express = require("express");
const Cors = require("cors");
const port = process.env.PORT || 5000;
const MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser')
const app = express();
const db = require("./key").mongoURI
var dbase;

app.use(Cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var citySchema = require('./models/City');


mongoose.connect(db)

  .then(() => console.log('Mongo OK'))
  .catch(err => console.log(err));


//Routes
var router = express.Router();

//post something in db
app.post('/name/add', (req, res, next) => {

  var name = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  };

  dbase.collection("name").save(name, (err, result) => {
    if (err) {
      console.log(err);
    }

    res.send('name added successfully');
  });
});
// Get something from db
// app.get('/cities', (req, res) => {
//   citySchema.find().toArray((err, results) => {
//     res.send(results)
//   });
// });
app.get('/cities', (req, res) => {
  citySchema.find()
    .then(results => res.send(results))
    .catch(err => console.log(err))

});

app.get('/', function(req, res) {
  res.send('im the home page!')
})

app.get('/contact', (req, res) => {
  res.send('This is the contact page with a POST request')
})

app.use('/', router);

MongoClient.connect('mongodb://nouman:punjabi1@ds047114.mlab.com:47114/mytinerary', { useNewUrlParser: true }, (err, db) => {
  dbase = db.db("mytinerary");
  if (err) return console.log(err)



  app.listen(5000, () => {
    console.log('app working on 5000')
  })
})
