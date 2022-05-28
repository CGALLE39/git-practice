"use strict";

function isEven(x)
{
    return x % 2 === 0;
}

console.log(isEven(5))
console.log(isEven(8))



//1. Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

function isArray(input) {
    if (toString.call(input) === "[object]")
        return true;
    return false;
};

console.log(isArray([4,3,4,5]));
console.log(isArray('cat'));

let is_array = function(input) {
    if (toString.call(input) === "[object Array]")
        return true;
    return false;
};
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));


// 5. Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
// Expected Output :
//     "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));

// Write a JavaScript program to compute the sum and product of an array of integers.

let array = [1, 2, 3, 4, 5, 6],
    x = 0,
    y= 1,
    i;
for (i = 0; i < array.length; i += 1)
{
    x += array[i];
    y *= array[i];
}
console.log('Sum : '+x + ' Product :  ' +y);
