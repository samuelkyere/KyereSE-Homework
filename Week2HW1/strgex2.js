
// Exercise 2
/*let prompt = require('prompt-sync')()

let a = prompt('enter a character:')
let num = Number(prompt('enter anything')) ;
let c = a.length;
let cn = num.length;
let m = typeof a && typeof num ;
console.log(c + 'string' );
console.log(cn + 'number')
console.log(m);*/

// Write a program to find how many letters, numbers, and special characters are in a user entered string.

let prompt = require('prompt-sync')();
let userText = prompt('enter a character:');
let text = userText.toUpperCase();
let num = 0;
let letters = 0;
let characters = 0;
for (let i=0; i< text.length; i++){
    let charCode = text.charCodeAt(i);
    // check if it is a number character
    if (charCode >= 48 && charCode <= 57) {
        num++;
    // else check if it  is a letter
    }else if (charCode >= 65 && charCode <= 90){
        letters++;
    // else the character is a special character
    } else{
        characters++;
    }
}
console.log(" Numbers: " + num + " letters " + letters + " Characters: " + characters )