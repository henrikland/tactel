var express = require('express');
var app     = express();

app.use(express.static(__dirname));

app.listen(8080, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("serving at 8080");
  }
});
