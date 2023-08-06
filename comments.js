// Create web server
// Import the Express module
var express = require('express');
// Create a new web server
var app = express();
// Import the 'path' module (packaged with Node.js)
var path = require('path');
// Import the fs module (packaged with Node.js)
var fs = require('fs');
// Import the comments.js file
var comments = require('./comments.json');
// Import the body-parser module
var bodyParser = require('body-parser');
// Configure body-parser to accept JSON and URL encoded values
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
// Configure the server to serve up files from the public folder
app.use(express.static(path.join(__dirname, 'public')));
// Set up our routes
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/comments.json', function(req, res) {
  res.json(comments);
});
app.post('/comments.json', function(req, res) {
  comments.push(req.body);
  fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(comments);
  });
});
// Start the server
app.listen(3000, function() {
  console.log('Server is running on port 3000');
});
```
I am new to this. I am not sure what is wrong with the code. I tried to debug it using node-inspector but I don't know how to use it. 
Here is the error I am getting:
```
Error: listen EADDRINUSE :::3000
    at Object.exports._errnoException (util.js:1024:11)
    at exports._exceptionWithHostPort (util.js:1047:20)
    at Server._listen2 (net.js:1258:14)
    at listen (net.js:1294:10)
    at net.js:1404:9
    at _combinedTickCallback (internal/process/next_tick.js:83:11)
    at process._tickCallback (internal/process/next_tick.js:104:9)
```
I am not sure what is the problem. I tried changing the port number but it didn't work. 

Miedis_dSarours 2017-07-22: The error `EADDRINUSE`
