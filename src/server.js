var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true,
}));

//sets up route 
app.use('/', require('./routes')(express));

exports.server = app.listen(port, () => {
  console.log('Server is working on ', port);
});
