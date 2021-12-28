//.map, filter---true, reduce---- total, b (), sort--- -1, 1, forEach
//when there is statements then put true to console them instead of writing console.log()

const ages=[33,12,20,16,54,61,13,64]
const companies =[
    
    {name:"Company one", category:"finance", start: 456},
    {name:"company two", category:"retail", start: 123},
    {name:"company three", category:"auto", start:789}
];

companies.forEach((item)=>console.log(item))
//to print the specific item from that arrray
companies.forEach((shahash)=>console.log(shahash.category))
companies.map((item)=>console.log(item))
ages.map((item)=>console.log(item))

// filter in the next line
// this is ordinary taking many things and included the empty array for restoring under the statement

function aging(array)
{
    let shahash=[];
    for(let i=0;i<array.length;i++)
    {
        if(array[i]>12)
        {

         shahash.push(array[i])
        }
    }
    return console.log(shahash)
}

aging(ages);


// filter method for getting ages above 12
//also showing use of ternary operator for pracitce, it alternative though
// const second= ages.filter((item)=>)

const year=45;
const ok= year>33?'yes':'no'
console.log(ok)


// ALTERNATIVE FOR CREATING AN EMPTY ARRAY TO DISPLAY IN ARRAY FORMAT USING FILTER METHOD
//just put the desired condition
const second= ages.filter((item)=>item>12)
console.log(second)

//another way just to put true in usual way
const third=ages.filter((item)=>
{
    if(item>12)
    {
        return true;
    }
})
console.log(third)


// GETTING THE COMPANY WITH RETAIL CATEGORY ONLY
//FIRS ES5 METHOD

const fourth = companies.filter(function(item){
{
    if(item.category==="retail")
    {
        return true;
    }
}
})

console.log(fourth)

//short handed way for above

const fifth =companies.filter((item)=>item.category==="retail")
console.log(fifth)


const agi=[33,12,20,16,54,61,13,64]

//.map
//create array of company names

const mine= companies.map(function(item){
    return item.name
})
console.log(mine)

const tan= companies.map((item)=>item.name)
console.log(tan)

// getting square root using sqrt
//multplying all and geeting in a array format for numre array
//also wanna do both on same code 
const numre=[9,81, 36, 64]
const res=numre.map((item)=>Math.sqrt(item))
const res2=numre.map((item)=>item*2)
const res3=numre.map((item)=>Math.sqrt(item))
                .map((item)=>item*2)
console.log(res)
console.log(res2)
console.log(res3)


//sort
// gives in array format
//works similar, takes two values in the parameter
//here we are sorting on basis of start dates of the companies  
const five = companies.sort(function(item1, item2)
{
    if(item1.start>item2.start)
    {
        return 1
    }
    else
    {
        return -1
    }
})
 console.log(five) // gives array of companies in sorted order on the basis of date

//short method for the above
const six = companies.sort((item1, item2)=>item1.start>item2.start?'1':'-1')
console.log(six)


// sorting the array agi that consits of list of numbers in ascending
const seven= agi.sort((item1,item2)=>item1>item2?'1':'-1')
console.log(seven)

//in desccending
const eight=agi.sort((item1,item2)=>item1<item2?'1':'-1')
console.log(eight)


//REDUCE METHOD for addition
const num=[1,2,3,4,5,6,7]
const add=num.reduce((total,list)=>total+list,0)
console.log(add)

//anotehr way
const add1=num.reduce(function(total,list){
    return total+list;
},0)
console.log(add1)

// adding the start dates of the companies from above
const add2=companies.reduce((total,num)=>total+num.start,0)
console.log(add2)



// using all the methods at once in the variable listed below
// sorting on descending
const age22=[44,55,66,77,88,99]
const result=age22.map((value=>value*2))
                .filter((value=>value>88))
                .sort((a,b)=>b>a?'1':'-1')
                .reduce((a,b)=>a+b,0)
console.log(result)

let shoppingCart = [
    {product: 'phone',qty: 1,price: 699},
    {product: 'Screen Protector',qty: 1,price: 9.98},
    {product: 'Memory Card',qty: 2,price: 20.99}
];

const total1= shoppingCart.reduce((total,b)=>total+(b.price+b.qty),0)
console.log(total1)

// 

// just getting the price
let shop=shoppingCart.map((value)=>value.price)
console.log(shop)

// adding price to get total value of price fo all the products

let shop1=shoppingCart.reduce((total,a)=>total+a.price,0)
console.log(shop1)

// price*qty ---shows also getting access over more than one object
let shop2=shoppingCart.reduce((total,a)=>total+(a.qty*a.price),0)
console.log(shop2)

var apple=99;
var c= apple;
console.log(c)

// USE OF rest and destructuring--->remember it's array so [] otherwise object{}
let names=["shahash","sita","gita"]
let [first, ...rest]=names;
console.log(first)
console.log(rest)

//to join arrays
let places=["jamal","dharan"]

//join two arrays   --->note in case of objects do similar with the object names
// let res={...name1, ...name2} and console.log(res)
let resArray=[...names, ...places]
console.log(resArray)

