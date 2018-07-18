var friendData = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {

    
    console.log(req.body.scores);

    var highest;
	var highDifference = 100;
    var compatible;
    var loopDifference = 0;

    // loop through each friend
    for (var i = 0; i < friendData.length; i++) {

      // loop through each friends scores
      for (var j = 0; j < friendData[i].scores.length; j++) {
        
        // find difference amount
        loopDifference += Math.abs(req.body.scores[j] - friendData[i].scores[j])
      }

      // // if the total Difference was lower for this friend, then change the highest friend
      if (loopDifference < highDifference) {
        // changes the best match
        highDifference = loopDifference;
        
        compatible = i;
      }

      // reset loop difference
      loopDifference = 0;
    }

    console.log(compatible);
    console.log(friendData[compatible].name);
    
    res.json(friendData[compatible]);
    friendData.push(req.body);

  });

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendData = [];
    res.json(friendData);
  });
};