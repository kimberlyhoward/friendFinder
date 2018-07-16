var path = require('path');
var friends = require('../data/friends.js');

module.exports = function (app) {
	app.get('/api/friends', function(req, res){
		res.json(friends);
	});

	app.post('/api/friends', function(req, res){
		var userInput = req.body;
		friends.push(userInput);
		res.json(friends);

		var userResponses = userInput.scores;
		console.log('User Score = ' + userResponses);

	});

}