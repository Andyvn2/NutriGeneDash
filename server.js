var Chart 	= require('chart.js')
var http 	= require('http');
var https 	= require('https');
var fs 		= require('fs');

var express = require('express');
var path 	= require('path')

var app		= express();


var port 	= process.env.PORT || 8080;





app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public/'));

app.get('/', function(request, response){
	response.render('login')
})

app.get('/dashboard', function(request, response){
	console.log('Home Page');
	response.render('index')
})

app.listen(port, function(){
	console.log("our app is running on localhost" + port)
})