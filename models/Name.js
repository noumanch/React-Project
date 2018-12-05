let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let NameSchema = new mongoose.Schema({
  first_name: String,
  last_name: String
});

module.exports = mongoose.model('Name', nameSchema);
