var fs = require('fs');
// Buffer class is a global; don't need to require it
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var indexString = fs.readFileSync('index.html').toString();
  response.send(indexString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
