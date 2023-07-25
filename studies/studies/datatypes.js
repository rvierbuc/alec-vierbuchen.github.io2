/*
 * DATATYPES:
 *
 * 0. Data types are different categories of data that exist in javascript. Each datatype
 * represents a specific kind of value. The program interacts differently with pieces of data
 * based on what datatype they are. 
 *
 * 
 */

// 1. number //
//Numbers are any integers or floating point numbers. They can have mathmatical functions perfomed on them. 
let number = 42;
let half = .5;
let result = number * half;
console.log(result)
//The above example will print 21 to console.

//2. string//
/**
 * Strings are a series of characters enclosed in '', "", or ``. 
 * Strings have a length property and iterable. 
 */
let stringGreeting = 'Good morning, '
let firstName = "Alec"
let punctuation = `!`
console.log(stringGreeting + firstName + punctuation)
//the above example will print 'Good morning, Alec!' to console/

// 3. boolean:
/**
 * Booleans are either true or false. They are like an on/off switch in that they are either
 * one value or the other.
 */
let sunny = true;
let raining = false;
if(raining){
    console.log(`Don't forget your umbrella!`)
}else if(sunny){
    console.log(`It's a beautiful day!`)
}
//The above example will print 'It's a beautiful day!' because raining is false. 


// 4. array:
/**
 * Arrays are an ordered list of elements. Arrays are iterable and have a length property.
 * their values can be accessed by their 0 index position in the array. 
 */

//index    0  1  2  3  4
let arr = [1, 2, 3, 4, 5]
console.log(arr)
arr.push(6)
console.log(arr[5]);
/**
 * In the above example, the first console.log will print [1, 2, 3, 4, 5] to the console,
* arr.push(6) will add the number 6 to the end of the array, and the second console log will print
* six because 6 will now occupy the fifth position in the array.
*/


// 5. object:
/**
 * Objects store key-value pairs in groups and are used to represent more complex data.
 */
let obj = {
    firstName: 'Alec',
    lastName: 'Vierbuchen',
    occupation: 'student',
    age: 38,
    pets: true
}
console.log(obj);
if(obj.pets){
    console.log('Pets exist.')
}
//the above example will first print the object to console and then print 'Pets exist.' because 
//the value stored at the key pets is true.

//6. Function:
/**
 * Functions are blocks of code that perform a particular task. 
 */
function add(x, y){
    return x + y;
}
console.log(add(2, 3))
//The above example will add 2 and three together as defined in the add function and print 5 to console.

//7. undefined:
/**
 * Undefined is a variable that has been declared, but has not been assigned a value. 
 */
let notExist;
console.log(notExist);
//The above example will print undefined to console because notExist does not have a vaule.

//8. null:
//null represents an intentional absence of any object value.
let empty = null;
console.log(empty)
//The above example will print null to console because empty is assigned to null.

//9. NaN:
//NaN stands for 'Not a Number' it represents a value that is not a number.
console.log('telephone' * 'banana');
//The above example will return NaN because multiplication cannot be performed on strings. 

//10. Infinity and -Infinity:
console.log(1 / 0); //prints Infinity
console.log(-1 / 0); //prints -Infinity

// 11. Difference between primitive/simple and complex data types:
/** Primitive data types (Number, String, Boolean, undefined, null, NaN, Infinity, -Infinity) are 
* immutable, meaning they are not altered and complex data types (Array, Object, Function) are mutable,
* meaning they can be altered.
*/
let array = [1, 2, 3];
array.unshift(0);
console.log(array)
//here a value is added to an array
let numb = 2;
numb = 4;
//here a number is reassigned to a new value

/** 12. Primitive values are passed to a function by copy, complex values are passed by reference.
* When a primitive value is passed to a function, a copy is created and used within the function. 
* Changes made to the copied value inside the function do not affect the original value. 
* When a complex value is passed to a function, a reference points to the original value's memory 
* location. Any modifications made to the complex value inside the function also 
* affect the original value outside the function.
*/
