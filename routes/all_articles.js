var fs = require('fs');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send({
    articles: fs.readdirSync('./archives').reverse()
  });
});

router.post('/single_article', function (req, res, next) {
  fs.readFile('./archives/' + req.body.name, 'utf8', function (err, data) {
    res.send(data);
  });
});

router.post('/page_articles', function (req, res, next) {
});

module.exports = router;