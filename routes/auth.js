var express = require('express');
var User = require('../models/User');
var router = express.Router();

router.post('/register', function (req, res) {
	// register post api call
	var resJSON = {
		username: req.body.username,
		phonenumber: req.body.phonenumber,
		password: req.body.password
	};
	res.status(200).json(resJSON);
});

router.post('/login', function (req, res) {
	// login post api call
	var resJSON = {
		username: req.body.username
	};
	res.status(200).json(resJSON);
});

module.exports = router;
