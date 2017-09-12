require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sequelize = require('./db');
//var User = sequelize.import(__dirname + '\\models\\user');
//Create table
//User.sync({force: true}); // sync( {force: true}), to drop then create each time the app starts!


sequelize.sync(); //To reset the table sync({ force: true })


// This changes the data over to the json format
app.use(bodyParser.json());


// .use configures the data for express
app.use(require('./middleware/headers'));
app.use(require('./middleware/validate-session'));

app.use('/api/login', require('./routes/session'));
app.use('/api/user', require('./routes/user'));
app.use('/api/definition', require('./routes/definition'));
app.use('/api/log', require('./routes/log'));

app.use('/api/test', function(req, res){
	res.send("Hello World");
});

app.listen(process.env.PORT, function(){
	console.log('App is listening on 3000.')
});



// Data Model









