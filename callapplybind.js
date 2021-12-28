// //call, apply, bind-->is capable of binding 
// closure or currying
// rest operator
// this keyword 

function greet(){
    return `Hello ${this.name}`
}

const personNew = {
    name : 'John Deer'
}
console.log(greet.call(personNew));
console.log(greet.apply(personNew));

const greet2 = greet.bind(personNew);
console.log(greet2())

// currying or closure
function getName(value1){
    return function(value2){
        return function(value3){
            return(value1*value2*value3)
        }
    }

}
let sumTotal= getName(4)(5)(6)
console.log(sumTotal) 

// second Example
function printName(name1){
    return function(age){
            return console.log(`${name1} is ${age} years old`)
    }
}
// let hero= printName("shahash")
// hero(5);
printName('shahash')(7)


// for of....adding all the element of an array
function sum(...args)
{
    let total=0;
    for(let arg of args){
        total=total+arg
    }
    return console.log(total);
}
sum(2,3,4,5,67,7)


// Example 2 for call v apply

var person1={
    name:"Marvin",
    age: 42,
    size: '2xm'
}

var person2={
    name:"shahash",
    age: 4,
    size: '2m'
}

var sayHello = function(){
    console.log("Hellor "+this.name)
}

var sayGoodBye=function(){
    console.log("goodbye "+this.name)
}

sayHello.call(person2)
sayGoodBye.apply(person1)


//sumofNum
//{...obj} [...arr]
function sumofNum(...args){
    console.log(...args) //2,3,6,7
    let total = 0;
    // for ...of -->it like let arg= args
    for(let arg of args){
        total = total + arg
    }
    return total;
 }
console.log(sumofNum(2,3,6,7))