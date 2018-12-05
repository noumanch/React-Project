var express = require("express");
var router = express.Router();



router.post('/name/add', (req, res, next) => {

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

router.get('/', function(req, res) {
  res.send('im the home page!')
})

router.get('/test', (req, res) => {
  res.send('Hello! World')
})


router.get('/cities', (req, res) => {
  dbase.collection('cities').find().toArray((err, results) => {
    res.send(results)
  });
});
module.exports = router