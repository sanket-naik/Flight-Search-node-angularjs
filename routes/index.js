var express = require('express');
var router = express.Router();
var path = require('path')

/* GET users listing. */
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + './../Views/index.html'));
});

module.exports = router;