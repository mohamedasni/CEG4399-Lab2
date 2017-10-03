var express = require('express');
var router = express.Router();

var title = "CEG4399 - Lab 2";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: title });
});

router.get('/register', function (req, res) {
	res.render('register', {title: title});
});

router.get('/login', function (req, res) {
	res.render('login', {title: title});
});

router.get('/loginStep2', function (req, res) {
	res.render('loginStep2', {title: title});
});

module.exports = router;
