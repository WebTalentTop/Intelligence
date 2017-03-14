// set up
var express = require('express');
var app = express(); 								// create our app w/ express
var port = process.env.PORT || 8080; 				// set the port

// configuration
app.use(express.static(__dirname + '/'));
app.all('*', function (req, res) {
    res.sendfile("index.html");
});
//app.use('/node_modules', express.static(__dirname + '/node_modules'));
//app.use('/app', express.static(__dirname + '/app'));
//app.use('/', express.static(__dirname + '/'));

// listen (start app with node server.js)
app.listen(port);
console.log("App listening on port " + port);
