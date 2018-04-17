var db = require('./models');

var to_do = [
{	
	firstTodo: 'walk the dog',
	secondTodo: 'grab a new fridge',
	thirdTodo: 'buy groceries',
	fourthTodo: 'pick up paycheck',
}
];

// remove all records that match {} -- which means remove ALL records
db.Todo.remove({}, function(err, items){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all items');

    // create new records based on the array books_list
    db.Todo.create(to_do, function(err, items){
      if (err) { return console.log('err', err); }
      console.log("created", to_do.length, "items");
      process.exit();
    });
  }
});