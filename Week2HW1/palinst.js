// Checking whether a user  input is a string palindrum or not
/*let prompt = require('prompt-sync')()

let userinput = prompt('enter a character:')
let reserve = ''; 
let i=userinput.length-=1
while(i>=0){
reserve += userinput.charAt(i);
console.log(reserve);
i--

}
if (userinput==reserve)
{
    console.log(userinput + ' is a palindrome')
}
else
{
    console.log(userinput + " is not a palindrome")
}*/
// Question 2
/*let prompt = require('prompt-sync')()
let userinput = prompt('enter a character:')
for(let i=65; i<=90,i++)
{
    i= userinput
    let a = i.toString();
console.log()

}
//*/

// Write a program to find how many letters, numbers, and special characters are in a user entered string.

let prompt = require('prompt-sync')();
let userinput = prompt('enter a character:');
let text = userText.toUpperCase();
let num = 0;
let letters = 0;
let characters = 0;
for (let i=o; i< text.length; i++){
    let charCode = text.charCodeAt(i);
    // check if it is a number character
    if (charCode >= 48 && charCode <= 57) {
        num++;
    // else check if it  is a letter
    }else if (charcode >= 65 && charCode <= 90){
        letters++;
    // else the character is a special character
    } else{
        characters++;
    }
}
console.log("Numbers: " + num + "letters: " + letters + "Characters: " + characters )


