// hoisting
// It is phenomenon in JavaScript by which we can access the variables and function even before we have initialized them

// you will get undefined for the varibales when you try to log them if the variables are defined after console
// when talking about hoisting it's always var variable

console.log(x);  // will get undefined
var x; // gives undefined when you put var x=99 also

//but 

var y;
console.log(y) // undefined because value is not given for y at top

var z= 9;
console.log(z) // logs value

//Now in case of functions
// in arrow functions and functions assined to certain varibale it gives error

shahash() // error
kandel()  // error
var shahash =()=>{
    console.log(`what's up`)
}

var kandel = function(){
    console.log(`hero0`)
}

// However in a regular function i.e. function name

print() // works fine
function print(){
    console.log(`hey what you doing`)
}

