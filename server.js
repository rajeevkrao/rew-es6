'use strict';

var PORT 			= process.env.PORT || 5000
var express 		= require("express");
var path			= require('path');
var bodyParser  	= require('body-parser');
var fs 				= require('fs');
var localStorage 	= require('localStorage');

var app     		= express();
require('dotenv').config()

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static(__dirname + '/public' ));

//for normal page
app.get('/login',function(request, response){
	console.log("nT");
	response.sendFile(path.join(__dirname+'/views/login.html'));
});

app.post('/login', (req,res) =>{
	var users = JSON.parse(fs.readFileSync('./views/pass.json', 'utf8')); 
	var { password } = req.body;
	if(password==users.pass)
	{
		localStorage.setItem('SID', '1');
		res.redirect("/");
	}
	else 
		res.redirect("/login");
});

app.get('/suc', function (req, res) {
	res.send('hello world')
})

app.get('/fai', function (req, res) {
	res.send('failed')
})

app.get('/logout', function (req, res) {
	localStorage.removeItem('SID', 0);
	res.redirect("/");
})

var auth = function(req, res, next) {
	console.log("asd");
	if(1)
		return res.redirect("/fai");
	else
		console.log("asda");
		return next();
};

//for react
app.get('*', function(request, response){
	return response.sendFile(path.join(__dirname+'/public/index.html'));

});

var listener = app.listen(PORT, function () {
	console.log('Your app is listening on port ' + PORT);  
});


