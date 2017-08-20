// server.js
// where your node app starts

// init project
/*
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/dreams", function (request, response) {
  response.send(dreams);
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  dreams.push(request.query.dream);
  response.sendStatus(200);
});

// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});*/

/*
 var express = require('express')
 var app = express()

 app.use(express.static('public'));

 app.get('/:id', function(req, res) {
      res.sendFile(__dirname + '/views/index.html');
     // res.end("Hello world!")
 })
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
*/
    function checkIfUnix(dateString){
			var valid = isNaN(dateString);
			return !valid; 
		}
		// Check if the date is NATURAL
		function checkIfNatural(dateString){
			var valid = new Date(dateString).getTime() > 0; 
			return valid; 
		}
		// Check if it's NOT A DATE
		function checkIfTimestamp(dateString){
			if(checkIfUnix(dateString)){
				return timeIsUnix(dateString); 
			}
      else if(checkIfNatural(dateString)){
        return timeIsNatural(dateString);
      }
      else{
        return timeIsNeither(dateString);
      }
		}
		// If the date is UNIX
		function timeIsUnix(dateString){
			var timeJSON = {}; 
			timeJSON.unix = dateString; 
			var dateString = new Date(dateString*1000); 
			var monthNames = ["January", "February", "March", "April", "May", "June",
				"July", "August", "September", "October", "November", "December"
			];
			var day = dateString.getDate(); 
			var month = monthNames[dateString.getMonth()];
			var year = dateString.getFullYear(); 
			var naturalTime = month + " " + day + ", " + year; 
			timeJSON.naturalTime = naturalTime; 
			return timeJSON; 			
		}
		//timeIsUnix(date); 
		// If the date is NATURAL
		function timeIsNatural(dateString){
			var timeJSON = {};  
			var dateString = new Date(dateString); 
			var monthNames = ["January", "February", "March", "April", "May", "June",
				"July", "August", "September", "October", "November", "December"
			];
			var day = dateString.getDate(); 
			var month = monthNames[dateString.getMonth()];
			var year = dateString.getFullYear(); 
			var naturalTime = month + " " + day + ", " + year; 
			timeJSON.unix = dateString.getTime(); 
			timeJSON.naturalTime = naturalTime; 
			return timeJSON; 			
		}
		// If it's not a DATE
		function timeIsNeither(dateString){
			var timeJSON = {}; 
			timeJSON.unix = null; 
			timeJSON.naturalTime = null; 
			return timeJSON; 
		}

var express = require('express');
var app = express();

app.get("/:url", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
  var id = req.params.url;
  console.log(checkIfTimestamp(id));
//  console.log(url);
  //res.send(transformed date json)
  //var id = req.query;
  //console.log("ID: " + id);
});
//App.get('/:url', function(req, res) { Var url = req.params.url; //logic to transform date here Res.send(transformed date json) }) ;

app.listen(process.env.PORT);