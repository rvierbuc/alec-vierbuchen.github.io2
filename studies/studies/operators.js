//OPERATORS:
/**
 * Operators are symbols or keywords that produce perform operations on one or more operands.
 * They interact with these values or variables to produce a result. They allow developers to 
 * manipulate data and perform simple tasks. 
 */
//1.Assignment Operators:
/**
 * Assignment operators are used to assign a value to a variable. "=" assigns the value
 * of a variable.
 */

let x = 10; //assigns x to 10 using the let declaration
const pi = 3.14; //assigns pi to 3.14 using the const declaration
var c = 100; //assigns c to 100 using the var declartation
x = 11 //assigns x to 11
//

//2. Arithmetic Operators:
/**Arithmetic operators are used to perform simple mathmatical operations with numeric values.
 * Common arithmatic operators include +, -, /, *, and %, addition, subtraction, division,
 * multiplication, and the modulo, respectively.
 */ 
let add = 3 + 2;
console.log(add);
//this will print 5 to the console because 3 plus two is five
let minus = 3 - 2;
console.log(minus);
//this will print 1 to the console because 3 minus 2 is 1
let divid = 4 / 2;
console.log(divid);
//this will print 2 to console because 4 divided by 2 is 2
let mult = 3 * 2;
console.log(mult);
//this will print 6 to console because 3 multiplied by 2 is 6.
let modul = 3 % 2;
console.log(modul);
//this will print 1 to console because the remainder of 3 divided by 2 is 1.

//Comparison Operators:

/**Comparison operators compare two values and return true or false. Common comparison operators
 * include ===, ==, !==, !=, >, <, >=, and <=, strictly equal, loosely equal, not strictly equal,
 * not loosely equal, greater than, less than, greater than or equal to, and less than or equal to,
 * respectively. 
 */
console.log(5 === '5');
//this will print false because the number five is not strictly equal to the string 5
console.log(5 == '5');
//this will print true because the number five is loosely equal to the string 5
console.log(5 !== '5');
//this will print true because the number five is not strictly equal to the string 5
console.log(5 != '5');
//this will print false because the number five is loosely equal to the string 5
console.log(5 > 10);
//this will print false to console because 5 is not greater than 10.
console.log(5 < 10);
//this will print true to console because 5 is less than 10.
console.log(5 <= 5);
//this will print true to console because 5 is less than or equal to 5.
console.log(5 >= 6);
//this will print false to console because 5 is not greater than or equal to 6.

//4. Logical Operators:
/**Logical operators combine bolean values in javascript. They include &&, ||, and !, 
 * and, or, and not, respectively.
 */
let yes = true
let please = true
let no = false
if(yes && please){
    console.log('Polite.')
}
//The above example will log 'Polite.' to console because yes and please are both true. 
if(yes && !please){
    console.log('Less polite.')
}
//The above will not log anything to console because while yes is true, not please is not true.
if(yes || please || no){
    console.log('Words were spoken.')
}
//The above will log 'Words were spoken.' because at least one of the conditions evaluates to true.

//5. Unary Operators:
/**Unary operators operate on a single operand. Examples include the 
 * not operator (!), type of, and the negation operator '-'.  
 */

let bool = !false; //bool is not false
console.log(bool) //not false is true
console.log(typeof bool); //type of bool returns 'boolean'
let num = 42
console.log(-num); //logs -42

//6. Ternary Operator:
/**
 * Ternary operators provide a shorthand for if/else statements.
 * "?"" represents the if statement and : seperates the else
 * statement.
 */
let a = true; //sets a equal to true
console.log(a ? 'yes' : 'no') //because a is true, this evaluates to yes
a = false //sets a to false
console.log(a ? 'yes' : 'no') //because a is false, this evaluates to no