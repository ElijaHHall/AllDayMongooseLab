var mongoose = require('mongoose');
var	Schema 	 = mongoose.Schema;

var TodoSchema = new Schema({ 
	 title: String,
     author: String,
     image: String,
     release_date: String
});

var Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;



