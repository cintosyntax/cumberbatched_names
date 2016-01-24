// Cumberbatch'ed Names a.k.a Benedict Cumberbatch Parody Name generator.
// Used to serve 
// Author: Edwin M. Mak
// Inspired by: http://benedictcumberbatchgenerator.tumblr.com/

var express = require('express');
var nameGenerator = require('./cumberbatched_names.js');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  var jsonPayload = {
    response_type: req.query["response_type"],
    text: nameGenerator.getName()
  };

  res.send(jsonPayload);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});