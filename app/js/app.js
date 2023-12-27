// 

console.log('Log file works');

// Array

// forEach Array Method 
// forEach(callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any):void
// A function that accepts up tp three arguments [value, index, array]. forEach calls the callbackfn function one time for each element in the Array.
// Performs the specified action for each element in an array.

const numbers =  [1,2,3,4,5];
numbers.forEach(conssoleItem);

function conssoleItem(item, index, arr) {
    // console.log('a[' + index + ']=' + item);
    // console.log(item);
    console.log(arr);
    console.log(index);
}

// Arrow function

// numbers.forEach((item, index, arr) => {
//     console.log('a[' + index + ']=' + item);
//     console.log(item);
// });