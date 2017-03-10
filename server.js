var express = require('express');
var pg = require('pg');
var app = express();
var connectionString = 'postgres://postgres:adamistheworst@localhost:5432/postgres';
var bodyParser = require('body-parser');
var client = new pg.Client(connectionString);

var config = {
  user: 'postgres',
  database: 'postgres',
  password: 'adamistheworst',
  host: 'localhost',
  port: 5432,
  max: 100,
  idleTimeoutMillis: 30000
};

var pool = new pg.Pool(config);

app.use(bodyParser.json({extended: true}));
app.use(express.static(__dirname + '/public'));


// Add a route for each CRUD command: GET, POST, PUT, DELETE



var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('PostgreSQL server running at http://localhost:%s', port);
});
