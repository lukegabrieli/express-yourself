'use strict';

var express = require('express');
var path = require('path');
var jade = require('jade');
var exp = express();
var port = 3000;

//Sets the path to the directory where the view files are located
exp.set('views', (__dirname + '/views'));

//sets the template engine to use
exp.set('view engine', 'jade');

//function that will get the url of path /.function that makes request/response
exp.get('/', function(req, res){
  res.render('index');
});

exp.get('/layout', function(req, res){
  res.render('layout');
});

exp.get('/ron', function(req, res){
  res.render('ron');
});

exp.get('/dog', function(req, res){
  res.render('dog');
});

exp.get('/banana', function(req, res){
  res.render('banana');
});

exp.get('/bees', function(req, res){
  res.render('bees');
});

exp.get('/home', function(req, res){
  res.render('home');
});

//Sets the path to the directory with static assets
exp.use(express.static(__dirname + '/public'));

exp.listen(port, function(){
  console.log('Yo dawg, yo server is runnin on '+port);
});
