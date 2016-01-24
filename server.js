// Cumberbatch'ed Names a.k.a Benedict Cumberbatch Parody Name generator.
// Used to serve 
// Author: Edwin M. Mak
// Inspired by: http://benedictcumberbatchgenerator.tumblr.com/

var express = require('express');
var nameGenerator = require('./cumberbatched_names.js');
var app = express();

app.get('/', function (req, res) {
  var jsonPayload = {};

  if (req.query.slack) {
    jsonPayload["response_type"] = "in_channel";
  }
  
  jsonPayload["text"] = nameGenerator.getName();

  res.send(jsonPayload);
});


app.listen(3000, function () {
  console.log("Now serving Cumberbatch'ed Names on port 3000");
});