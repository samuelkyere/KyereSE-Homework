let Array = [2,4,6,5,7,9]; //  Set an Array 
let sum =0; // Declare a variable and assign it the value '0'
for(let i=0; i<=Array.length; i++){ // Using a for loop, loop through the Array to find the sum of each of the elements
sum =  Array[i] + sum
console.log(sum)
}

