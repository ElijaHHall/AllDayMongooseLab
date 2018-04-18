
var db = require('./models');

var to_do = [
{	
	task: "walk dog",
	description: "just walk dog",
	ease: "pretty easy"
},

{	
	task: "pick up paycheck",
	description: "gotta get that money",
	ease: "easy peasy"
},

{	task: "buy groceries",
	description: "ya need groceries man",
	ease: "pretty easy"
	
}

];


// remove all records that match {} -- which means remove ALL records
db.Todo.remove({}, function(err, items){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all items');

    // create new records based on the array books_list
    db.Todo.create(to_do, function(err, todos){
      if (err) { return console.log('err', err); }
      console.log("created", todos.length, "todos");
      process.exit();
    });
  }
});


