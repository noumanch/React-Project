const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const db = require("./key").mongoURI
app.get('/sample', function(req, res) {
  res.send('this is sample!');
});

const mongoose = require('mongoose');

mongoose.connect(db)
.then(()=>console.log("Mongo OK"))
.catch(err => console.log(err));

app.get('/cities', (req, res) => {
        dbase.collection('cities').find().toArray( (err, results) => {
          res.send(results)
        });
    });
app.post('/name/add', (req, res, next) => {

  var name = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  };

  dbase.collection("name").save(name, (err, result) => {
    if (err) {
      console.log(err);
    }

    res.send('name added successfully');
  });
});
// we'll create routes here
var router = express.Router();

router.get('/', function(req, res) {
  res.send('im the home page!');
});

router.get('/test', function(req, res) {
  res.send('Hello World!' + ' ' + 'Test Works');
});
//apply the routes to our application

app.use('/', router);

const MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID;
MongoClient.connect('mongodb://nouman:punjabi1@ds047114.mlab.com:47114/mytinerary', (err, db) => {
  var dbase = db.db("crud");
  if (err) return console.log(err)
  app.listen(3000, () => {
    console.log('app working on 3000')
  })

})
//Start the Server
//app.listen(port);
//console.log('Magic happens on port' + port);
