var fs = require('fs'),
express = require('express'),
app = express();
var request = require('request');

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');


// load auth variables
var auth = require('./auth');

var example = __dirname + '/example.json';


var port = process.env.PORT || 3000;    // set our port
require(__dirname + '/routes')(app);

var router = express.Router();


app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.listen(port);
console.log('Listening on port ' + port);
