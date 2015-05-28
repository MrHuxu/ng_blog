var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(process.env.NODE_ENV);
  switch (process.env.NODE_ENV) {
    case 'development':
      res.render('index_dev');
    case 'production':
      res.render('index_prd');
    default:
      res.render('index_dev');
  }
});

module.exports = router;
