var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var wodSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  comments: {type: String},
  date: {type: Date, default: Date.now}
})
module.exports = mongoose.model("Wod", wodSchema)
