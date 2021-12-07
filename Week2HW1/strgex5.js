let prompt = require('prompt-sync')();

let string = prompt('enter a string:');
let  stringArr = string.split('');
for (let i =0; i< string.split(); i++ ){
    stringArr[i] = stringArr[i].charAt(0).toUpperCase() + stringArr[i].slice(1);
}
console.log(stringArr.join(' '));

