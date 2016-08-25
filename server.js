var http    = require('http');
var xml2js  = require('xml2js');
var express = require('express');
var app     = express();

app.use(express.static(__dirname));

app.get('/systemetartiklar', function(req, res) {
  console.log("Requesting XML from Systemet...");

  http.get({
    host: 'www.systembolaget.se',
    path: '/api/assortment/products/xml'
  }, function(systemetResponse) {
    systemetResponse.setEncoding('utf8');

    var body = '';

    systemetResponse.on('data', function(chunk) {
      body += chunk;
    });

    systemetResponse.on('end', function() {
      console.log("Got all data, parsing...");

      xml2js.parseString(body, function(err, result) {
        if (err) {
          console.log("XML parsing error");
          console.log(err);
        } else {
          console.log("Parsing complete, sending...");
          res.send(result);
        }
      });
    });
  }).on('error', function(err) {
    console.log("http.get error");
    console.log(err.message);
  });
});

app.listen(8080, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("serving at 8080");
  }
});
