var express = require('express');
var User = require('../models/User');
var router = express.Router();
var messageHelper = require('../utils/MessageSenderHelper');
var verKey = "tobeornottobeisthequestion";

router.post('/register', function(req, res) {
  // register post api call
  var newUser = {
    username: req.body.username,
    phonenumber: req.body.phonenumber,
    alpha: req.body.password
  };

	User.findOne({
		username: req.body.username
	}, function (err, user) {
		if (err) {
			res.status(500).json({
        message: "failed to add user.",
        err: err
      });
		} else if (user) {
			res.status(500).json({
        message: "User already exists."
      });
		} else {
			var user = new User(newUser);

			user.save(function (error, result) {
				if (err) {
					res.status(500).json({
		        message: "failed to save user.",
		        err: error
		      });
				} else {
					res.status(200).json({verKey: verKey});
				}
			});
		}
	});
});

router.post('/login', function(req, res) {
  // login post api call

	User.findOne({
		username: req.body.username
	}, function (err, user) {
		if (err) {
			res.status(500).json({
        message: "failed to lookup user.",
        err: err
      });
		} else if (!user) {
			res.status(500).json({
        message: "User does not exist."
      });
		} else {
			var randomB = Math.floor(Math.random() * (64 - 0) + 0);
			var beta = Math.pow(0.9, randomB) % 1;

			user.update({
				beta: beta
			}, function (error, updatedUser) {
				if (error) {
					res.status(500).json({
		        message: "failed to update user.",
		        err: err
		      });
				} else {
					messageHelper.sendSMS(beta);
					res.status(200).json({beta: beta});
				}
			});
		}
	});
});

router.post('/login/step2', function (req, res) {
	User.findOne({
		alpha: parseFloat(req.body.password),
		beta: parseFloat(req.body.beta)
	}, function (err, user) {
		if (err) {
			res.status(500).json({
				message: "failed to search for user.",
				err: err
			});
		} else if (!user) {
			res.status(404).json({
				message: "failed to find user.",
				err: err
			});
		} else {
			res.status(200).json({success: "success"});
		}
	});
});

module.exports = router;
