// Create web server with express module
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var comments = require('./comments.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set the path to the public folder
app.use(express.static('public'));

// Set the path to the node_modules folder
app.use('/scripts', express.static(`${__dirname}/node_modules/`));

// Get the comments from the file
app.get('/comments', function(req, res) {
  res.setHeader('Cache-Control', 'no-cache');
  res.json(comments);
});

// Add a comment to the file
app.post('/comments', function(req, res)
