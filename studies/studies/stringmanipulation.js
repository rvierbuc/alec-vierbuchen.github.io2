//STRING MANIPULATION:
/**
 * String manipulation is the modification and manipulation of strings to create
 * new strings with different content or formats. Strings are a sequence of characters enclosed
 * in '', "", or ``.
 */
//1. With Operators:
/**
 * Strings can be manipulated with various operators like the 
 * concatenation operator (+) or the assignment operator (=).
 */

let firstName = 'Alec'; //assigns firstName to 'Alec'
let lastName = 'Vierbuchen'; //assigns lastName to 'Vierbuchen'
let fullName = firstName + ' ' + lastName; // + concatenates the strings
console.log(fullName);//logs 'Alec Vierbuchen' to console

//2. With String Methods
/**
 * There are many ways native to Javascript to interact with strings.
 * These methods can interact with strings and perform various 
 * specific tasks.
 * */

let string = 'Hello, World!'
console.log(string.length);//logs 13, the number of characters in the string
console.log(string.toLowerCase());//logs the string with all letters to lower case
console.log(string.substring(2, 6));//logs 'llo,', the second index of the string to the sixth index
console.log(string.split(' '))//logs an array of the string split at the space
console.log(string.replace(/Hello/, 'Goodbye'))//logs a 'Goodbye World,' the string with Hello replaced by goodbye.