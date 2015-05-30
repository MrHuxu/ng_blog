var fs = require('fs');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send({
    articles_2013: fs.readdirSync('./archives/2013').slice(0).reverse(),
    articles_2014: fs.readdirSync('./archives/2014').slice(0).reverse()
  });
});

router.post('/', function (req, res, next) {
  fs.readFile('./archives/' + req.body.year + '/' + req.body.name, 'utf8', function (err, data) {
    res.send(data);
  });
});

module.exports = router;