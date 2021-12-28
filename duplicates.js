// duplicates filtering methods
// new Set()

let characters=['A','B','C','A','C','B']
//set method
let uniqueChar = [...new Set(characters)]
console.log(uniqueChar)

// forEach, includes
let uniqueChar2 =[]
characters.map((item)=>{
    if(!uniqueChar2.includes(item))
    {
        uniqueChar2.push(item)
    }
} )
console.log(uniqueChar2)

// indexOf method to find duplicates
// this will illustrates that for duplicates the index is equal to the indexOf
let a=characters.map((item,index)=>{
    console.log(`${item}-${index}-${characters.indexOf(item)}`)
})

// now simply use the filter method to print without duplicates
characters.filter((item, index)=>
{
    if(index!==characters.indexOf(item))
    {
        console.log(item)
    }
})

// same way by considering a varibale because it prints in form of array 
// indexOf return -1 if not found


// let final=characters.filter((item, index)=>
// {
//     if(index!==characters.indexOf(item))
//     {
//         return item;
//     }
// })
// console.log(final)



// lastIndexOf()----> pass the string
let text = "Hello planet earth, you are a great planet.";
let res=text.lastIndexOf("planet")
console.log(res)