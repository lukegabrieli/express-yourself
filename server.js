'use strict';

var express = require('express');
var path = require('path');
var jade = require('jade');
var app = express();
var bodyParser = require('body-parser');
var port = 3000;

app.use(bodyParser.json());

//Sets the path to the directory where the view files are located
app.set('views', (__dirname + '/views'));

//sets the template engine to use
app.set('view engine', 'jade');

//responds to request with url endpoint secret with a string
app.get('/secret', function(req, res) {
  res.send('You found the gold!');
});

//function that will get the url of path /.function that makes request/response
app.get('/', function(req, res){
  res.render('index');
});

app.get('/layout', function(req, res){
  res.render('layout');
});

app.get('/ron', function(req, res){
  res.render('ron');
});

app.get('/dog', function(req, res){
  res.render('dog');
});

app.get('/banana', function(req, res){
  res.render('banana');
});

app.get('/bees', function(req, res){
  res.render('bees');
});

app.get('/home', function(req, res){
  res.render('home');
});

app.post('/Users', function(req, res) {
  console.log('You are posting');
  console.log(req.body);
  res.send(req.body);
});

//RESTful express route method practice
app.get('/Users', function(req, res) {
  console.log('You are getting');
  var users = ['John', 'Jenny'];
  res.json(users);
});

app.delete('/Users', function(req, res) {
  console.log('You are deleting');
  var users = ['John', 'Jenny'];
  users.pop();
  res.json(users);
});

app.put('/Users', function(req, res) {
  console.log('You are putting');
  var users = ['John', 'Jenny'];
  users[1] = 'Joone'
  res.json(users);
});

//Sets the path to the directory with static assets
app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
  console.log('Yo dawg, yo server is runnin on '+port);
});
