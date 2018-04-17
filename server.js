
var db = require('./models');

var express = require('express');
	bodyParser = require('body-parser');

var app = express();

app.use(express.static(('public'));

app.use(bodyParser.urlencoded({ extended: true }));
	var port = 3000;









