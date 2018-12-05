let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const CitySchema = new Schema({
  country: {
    type: String
  },
  city: {
    type: String,
  }
});

module.exports = City = mongoose.model("city",CitySchema);
