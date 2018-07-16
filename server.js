var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8081;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))

app.get('/', function (req, res) {
    res.send('Hello Everybody');
})
    app.use(function (req, res){
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
})

  require('./app/routing/apiRoutes.js')(app);
  require('./app/routing/htmlRoutes.js')(app);
  
  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });