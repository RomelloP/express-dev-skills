var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  title: 'Greatest Developer Skills',
  date: req.date
});
});

module.exports = router;
