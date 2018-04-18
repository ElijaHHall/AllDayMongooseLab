
var db = require('./models');

var express = require('express');
	bodyParser = require('body-parser');

var app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
	var port = 3000;

var todos = 

app.get('/api/todos', function (req, res) {
  // send all todos as JSON response
  db.Todo.find(function(err, items){
    if (err) {
      console.log("index error: " + err);
      res.sendStatus(500);
    }
    res.json(todos);
  });
});

var newItemUUID = 18;

////Routes\\\\

app.get('/', function(req, res) {
	res.sendFile('views/index.html', { root: __dirname});
});


app.listen(port, ()=> {
  console.log(`App is ready to go ${port}`);
});





