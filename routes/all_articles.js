var fs = require('fs');
var express = require('express');
var router = express.Router();

var getAllArticles = function () {
  var articles = fs.readdirSync('./archives').reverse();
  if (articles.indexOf('.DS_Store') !== -1)
    articles.pop();
  return articles;
}

router.get('/', function(req, res, next) {
  res.send({
    articles: getAllArticles()
  });
});

router.post('/single_article', function (req, res, next) {
  fs.readFile('./archives/' + req.body.name, 'utf8', function (err, data) {
    res.send(data);
  });
});

router.post('/page_articles', function (req, res, next) {
  var page = req.body.page;
  var articles = getAllArticles();
  var response = {
    article_count: articles.length,
    articles: []
  };
  var page_articles = articles.slice(page * 5, page * 5 + 5);
  for (var i = 0, len = page_articles.length; i < len; i++) {
    response.articles.push({
      title: page_articles[i],
      content: fs.readFileSync('./archives/' + page_articles[i]).toString().slice(0, 400) + ' ...'
    });
  }
  res.send(response);
});

module.exports = router;