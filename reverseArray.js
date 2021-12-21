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




// shift and unshift
// Delete last element from array
// pop and push
// Delete first element

var array = [1,2,3];

// Insert 4,5,6 in end
array.push(4,5,6)
console.log(array)

// insert 0,-1,-2 in beigining
array.unshift(0,-1,-2)
console.log(array)

//Delete the last element from an array
array.pop()
console.log(array)

// delete the first element from an array
array.shift()
console.log(array)



// Switch Statements
var day = "monday";
switch(day)
{
     case "monday":
           console.log(`lets swim`);
          break;

     case "tuesday":
            console.log(`prepare food`);
            break;
      case "thursday":
      case "friday":
           console.log("go home")
           break;

       default:
           console.log(`nothing matched`)      

  }
      