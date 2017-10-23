var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var PORT = 3000;

// REQUIRE MIDDLEWARE
var instantMongoCrud = require('express-mongo-crud'); // require the module

mongoose.connect('database:27017/mongocrud');

var options = { //specify express-mongo-crud options
	host: `localhost:${PORT}`
}

//USE AS MIDDLEWARE
app.use(bodyParser.json()); // add body parser
app.use(instantMongoCrud(options)); // use as middleware

app.listen(PORT, ()=>{
	console.log('started');
});