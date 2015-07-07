'use strict';

var express = require('express');
var path = require('path');
var jade = require('jade');
var app = express();
var port = 3000;

//Sets the path to the directory where the view files are located
app.set('views', (__dirname + '/views'));

//sets the template engine to use
app.set('view engine', 'jade');

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

//Sets the path to the directory with static assets
app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
  console.log('Yo dawg, yo server is runnin on '+port);
});
