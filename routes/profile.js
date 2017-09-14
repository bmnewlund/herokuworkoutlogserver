var router = require('express').Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var Profile = sequelize.import('../models/profile');

router.post('/', function(req, res) {
	//variables
	    var firstName = req.body.profile.firstName;
        var lastName = req.body.profile.lastName;
        var age = req.body.profile.age;
        var weight = req.body.profile.weight;
        var height = req.body.profile.height;
        var user = req.user;

	//methods
	Profile
	//objects must match the model 
	.create({ 
	   	firstName: firstName,
	   	lastName: lastName,
	   	age: age,
	   	weight: weight,
	   	height: height,
	   	owner: user.id
	   })

		.then(
				function createSuccess(profile) {
				//send a response as json
		   		res.json({
		   			profile: profile
		   		});
		   	}, 
		   function createError(err) {
		       res.send(500, err.message);
		   }

		);
});

router.get('/', function(req, res) {
	//user variable
	var userid = req.user.id;
	Profile
		//findAll by owner method
		.findAll({
			where: { owner: userid }
		})
		.then(
			//success
			function findAllSuccess(data) {
				// console.log(data);
				res.json(data);
			},
			//failure
			function findAllError(err) {
				res.send(500, err.message);
			}
		);
});


module.exports = router;