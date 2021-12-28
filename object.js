
// spread operator inside the object to copy everything
let items = {
    product: 'phone',
    qty: 1,
    price: 699,
    firstname: 'Apple',
    getDetails: function(){
        return this.firstname.toUpperCase() + ' ' + 'price is ' + this.price
    }
}

const itemsCpy = { ...items };
console.log(itemsCpy)

//to change the objects property
// i can destructure and change it as well
// itemsCpy.product = 'iphone';
// console.log(itemsCpy)
let{product,price}=items;
product="television"
price=5444;
console.log(product)
console.log(price)

// to delete the properties from an object
const del= delete items.product
//or const del =delete items['product']
console.log(items)

//OBJECT
let m ={
    width:200,
    height:300,
    title:"my menu"
}

let {width, height, title} = m;
width=400
height=600
title ="My menu"



// 
let objc =[
    {ag:5},
    {fn:'tush'},
    
]