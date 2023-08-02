// Task 2: Data Manipulation
// Write a function in Node.js that takes an array of integers as input and returns the sum of all the numbers.

const sumOfArray = (array) => {
    if (Array.isArray(array)) {
    let sum = 0;
    for (const number of array) {
        if (typeof number !== 'number' || Number.isNaN(number)) {
            throw new Error('All elements of the array must be integers');
            }
        sum += number;
    }
    return sum;
  }
else{
    throw new Error('Input must be an array');
    }
}

const array = [1, 2, 3, -1, 4, 5];
const sum = sumOfArray(array);
console.log(`Sum of elements of the Array is = ${sum}` ); 