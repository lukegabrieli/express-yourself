'use strict';

var express = require('express');
var path = require('path');
var jade = require('jade');
var exp = express();
var port = 3000;

//Sets the path to the directory where the view files are located
exp.set('views', path.join(__dirname, 'views'));

exp.set('view engine', 'jade');

//function that will get the url of path /.function that makes request/response
exp.get('/', function(req, res){
  res.render('index');
});

//Sets the path to the directory with static assets
exp.use(express.static(path.join(__dirname, 'public')));

exp.listen(port, function(){
  console.log('Yo dawg, yo server is runnin on '+port);
});
