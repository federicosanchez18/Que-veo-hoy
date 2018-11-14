var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'fede',
  password : 'root',
  database : 'peliculas'
});


module.exports = connection;

