const mongoose = require("mongoose");

// cloud
// "mongodb+srv://userone:userone@myfiles.r6cjl.mongodb.net/libraryApp?retryWrites=true&w=majority

mongoose.connect("mongodb://localhost:27017/library");

const Schema = mongoose.Schema;

const authSchema = new Schema({
  author: String,
  country: String,
  language: String,
  period: String,
  image: String,
});

var authData = mongoose.model("authdata", authSchema);

module.exports = authData;
