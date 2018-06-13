/* jshint node: true */
/* jshint esversion: 6 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FeedbackSchema = Schema({
  email: String,
  msg: String,
  creationDate: Date
});

// exportamos el modelo
module.exports = mongoose.model('Feedback', FeedbackSchema);
