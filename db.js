var Db = require('mongodb').Db,
  MongoClient = require('mongodb').MongoClient,
  Server = require('mongodb').Server;

const fs = require('fs')

var dbconnection;


fs.readFile('./config.json', 'utf8', function(err, contents) {
    console.log(contents);
    console.log('dbstring' , contents.connectionString)
 

MongoClient.connect(contents.connectionString, function (err, db) {
  if (err) {
    console.log("connection err ", err);
    throw err;
  } else {
    console.log("successfully connected to the database");
    this.dbconnection = db;
  }
});

});


module.exports.dbconnection = dbconnection;