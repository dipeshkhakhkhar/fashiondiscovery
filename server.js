// MEAN Stack RESTful API Tutorial - Fashion Disovery Platform App

var express = require('express');
var app = express();

var mongojs = require('mongojs');
var db = mongojs('itemlist', ['itemlist']);


var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

/* Request to get first 20 items */
app.get('/itemlist', function (req, res) {
  console.log('Server receives a GET request for first 20 items');

  db.itemlist.find( {},{},{limit:20}, function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

/* Request to get subsequent pages */
/* Use mongodb's construct skip:n, limit:20 */
app.get('/itemlist/:pagenumber', function (req, res) {
  var pageNumber = req.params.pagenumber;
  console.log(pageNumber);
  db.itemlist.findOne({}, {},{skip:pageNumber*20, limit:20}, function (err, doc) {
    res.json(doc);
  });
});

app.listen(3000);
console.log("Server running on port 3000");