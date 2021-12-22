'use strict';
const string = "Madam";
const string2 = "I did, did I?"

function isPalindrome(name) {
  for (var i = 0; i < name.length; i++) {
    //in case if letters are written in caplocks and you do wannna consider that's okay
    name = name.toLowerCase();
    name = name.replace(/[.,\s]/g)
    if (name[i] !== name[name.length-1-i]) {
      return console.log(`madam is not a palindrome`);
    }
  }
return console.log(`madam is a palindrome`)
}

isPalindrome(string);
isPalindrome(string2)
