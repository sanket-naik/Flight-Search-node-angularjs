var express = require('express');
var router = express.Router();
var fs = require('fs')

// Reading JSON File
let jsonData = JSON.parse(fs.readFileSync(__dirname+'/./../JsonData/data.json', 'utf-8'))

//Get Request
router.get('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send(jsonData);
});

module.exports = router;
