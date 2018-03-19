//Server
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

console.log('Is connected on: ' + port);

//MongoDB

//MYSQL
var mysql = require('mysql');

var dbMysql = mysql.createConnection({
  host: "172.30.0.12",
  user: "User",
  database: "weather",
});

dbMysql.connect(function(err) {
  if (err) throw err
  console.log("Connected!");
});

//Implementation des donnees
var decollageFile = require('./decollage.json');
var values = [];
var sql = "INSERT INTO Site (nameSite, acces, postalCode, latitude, longitude, altitude) VALUES ? ";

decollageFile.forEach(function(element) {
  values.push(element);
});

dbMysql.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });

module.exports = app;
