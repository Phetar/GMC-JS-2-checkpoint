// Instructions
// ===========
// String Manipulation Functions:
// Reverse a String: Write a function that reverses a given string.
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('hello'));

// Count Characters: Create a function that counts the number of characters in a string.
function countCharacters(str) {
    return str.length;
}

console.log(countCharacters('hello'));

// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function capitalizeWords(str) {
    return str.replace(/\w\S*/g, function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
}

console.log(capitalizeWords('hello world'));

// Array Functions:

// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function findMaxAndMin(arr) {
    return [Math.max(...arr), Math.min(...arr)];
}

console.log(findMaxAndMin([1, 2, 3, 4, 5]));
// Sum of Array: Create a function that calculates the sum of all elements in an array.
function sumArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

console.log(sumArray, [1, 2, 3, 4, 5]);
// Filter Array: Implement a function that filters out elements from an array based on a given condition.
function filterArray(arr, condition) {
    return arr.filter(condition);
}

console.log(filterArray([1, 2, 3, 4, 5], (num) => num % 2 === 0));
// Mathematical Functions:

// Factorial: Write a function to calculate the factorial of a given number.
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(5));

// Prime Number Check: Create a function to check if a number is prime or not.
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}   

console.log(isPrime(5));

// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms
function fibonacciSequence(numTerms) {
    const sequence = [0, 1];
    for (let i = 2; i < numTerms; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

console.log(fibonacciSequence(10));