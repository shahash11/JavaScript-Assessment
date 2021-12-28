'use strict';
// const string = "Madam";
const string2 = "I did, did I?"

function isPalindrome(name) {
  for (var i = 0; i < name.length; i++) {
    //in case if letters are written in caplocks and you do wannna consider that's okay
    name = name.toLowerCase();
    name = name.replace(/[\W_]/g, "");
    if (name[i] !== name[name.length-1-i]) {
      return console.log(`string 2 is not a palindrome`);
    }
  }
return console.log(`string 2 is a palindrome`)
}

// isPalindrome(string);
isPalindrome(string2)


function foo(n){
    if(n==6)
    {
        let num =2
    }
    console.log(n)
}

for(var i=0;i<5;i++)
{
    console.log(i)
}
console.log(i)// it prints 5
for(let i=0;i<5;i++)
{
    console.log(i)
}
console.log(i)// it gives error as it is outside of the scope