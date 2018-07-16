var path = require('path');
var friends = require('../data/friends.js');

module.exports = function (app) {
	app.get('/api/friends', function(req, res){
		res.json(friends);
	});

	app.post("/api/friends", function (req, res) {
		var friendIndex = 0;
		var prevDiff = 50;
		for (let i = 0; i < friends.length; i++) {
			var newDiff = 0;
			for (let j = 0; j < 10; j++) {
				newDiff += Math.abs(friends[i].scores[j] - req.body.scores[j]);
			}
			if (newDiff < prevDiff) {
				prevDiff = newDiff;
				friendIndex = i;
			}
		}
		friends.push(req.body);
		res.json(friends[friendIndex]);

	});
}