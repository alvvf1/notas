const
  mysql = require('mysql'),
  hl = require('handy-log'),
  { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env

const db = mysql.createConnection({

  /*
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "noteaspp",
*/

  
host: "us-cdbr-iron-east-03.cleardb.net",
user: "bbed863867df98",
password: "4f6a2a01",
database: "heroku_db46fd3079ed7fc",


  /*
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
  */

  charset: "utf8mb4"
})

/*
var connection = mysql.createConnection(...);
var del = connection._protocol._delegateError;
connection._protocol._delegateError = function(err, sequence){
  if (err.fatal) {
    console.trace('fatal error: ' + err.message);
  }
  return del.call(this, err, sequence);
};
*/


db.connect(err => {
  if(err){
    hl.error(err)
  }
})

module.exports = db
