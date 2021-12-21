//reverse and show in the array format
// ['Orange', 'Apple', 'Banana']

var fruits = ["Banana", "apple", "orange"];

function Array(items) {

  var newArray = [];

  for (var i = items.length - 1; i >= 0; i--) {
    newArray.push(items[i]);
  }
  return console.log(newArray);
}

Array(fruits);

