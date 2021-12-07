// Exercise 3

/*let prompt = require('prompt-sync')();

let a = prompt('enter a character:');
let n = occurence  word; // length of the string
function countOccurences(a,is){
        return a.split().length -1;
}
console.log(countOccurences(a,))*/
/*
let prompt = require('prompt-sync')();

let a = prompt('enter a character:');
 
a += "";
subString += "";
if(subString.length<= 0)
console.log(a.length + 1);
var n =0;
    pos =0,
    step = allowOverlapping ? 1 : subString.length;
while (true) {
    pos = a.indexOf(subString,pos);
    if (pos >= 0){
        ++n;
        pos += step;
    }else break
}console.log(n)*/


let prompt = require('prompt-sync')();
let userText = prompt('enter a character:');
let text = "The Omicron variant of the SARS-COVID-19 virus is on the ascendency now"
let counter = 0;
// Punctuation removal
let texts = text.replace(/[\.|,|;|:|!|?|"|'|`|(|)]/g, "");
//String splitting by words
let textSplit = texts.split(" ");
for (let i = 0; i < textSplit.length; i++){
    if(textSplit[i].toUpperCase() === userText.toUpperCase()) {
       counter++;
    }
}
console.log(counter);