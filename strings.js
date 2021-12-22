// merging arrays, join, concat, splice, 

const array1=['email','name',"contact"]
const array2 =['abc', "cdfg"]
const array3=["shahahsh", "kandel"]

//converting array to string
//toString===> separates array elements with comma 

console.log(array1.toString())

// join(" ") method

console.log(array1.join("-"))


//merge arrays
console.log(array1.concat(array2))
console.log(array1.concat(array2,array3))


//splice(0,2)==>suppose to delete elements starting from index 1 and how many to delete
// first para---where does that elements starts from second para---how many
//if want to add additonal y0ou can do that as well
const numbers =[1,2,3,4,5]
console.log(numbers.splice(2,3))
console.log(numbers)

//
array1.splice(2,1)
console.log(array1)

//to add---wanted to add in the second index without deleting any elements
const names=['shahash', 'raj']
names.splice(2,0,"suresh")
console.log(names)

// displaying date, Date() is already an object in javaScript so we need to create another instace of Date with new

// to format 2020 10m 12d-- put inside Date(202,10,12)
const d = new Date();
console.log(d)
// display in the browser side use---> document    in the console---->console.log()
document.getElementById('jan').innerHTML=d;

//just trying to get the date only in console and in the browser sides
const date2 = new Date()
console.log(date2.getDate())
console.log(date2.getFullYear())
// standar way for getting dates
console.log(date2.getDay()+'/'+date2.getMonth()+'/'+date2.getFullYear())
// document.getElementById("jan").innerHTML=date2.getDate();


// setTimeOut

setTimeout(function place(){
    console.log('Hi how are you')
}, 3000)

function display1 (){
    setTimeout(()=>console.log(`Welocome`),3000)
    
}

display1();

// setInterval--. it is something like a timer
var interval=setInterval(() => {
    console.log('Hi how are you')
}, 2000);

clearInterval(interval)

// setTimeOut inside the for loop

for(let i=0;i<5;i++){
    setTimeout(()=>console.log(i),1000)
}