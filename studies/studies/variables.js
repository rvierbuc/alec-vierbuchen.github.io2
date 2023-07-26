/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
//var is used to declare variables less often now, but in older javascript var was the only keyword
//available to declare variables. When a variable is declared with var, during compiling the declaration
//is hoisted to the top of the code. While the declaration is hoisted, the assigned value is not,
//so the variable is undefined until assigned. 
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

//4. Let
/**Let is another key word for declaring variables. Let is block scoped, meaning it is only available
 * in the scope it is declared in. Let can be reassigned at any time. Let is not hoisted 
 * and must be declared before being used. 
*/
//1. declaration and assignment //
let num = 22;
num = 11
console.log(num);

//5. Const
/**Const is another key word for declaring variables. Const is block scoped, it is only available in the scope 
 * in which it is defined. Const cannot be reassigned after being declared. Const is not hoisted. You must declare
 * const before it can be used. 
 */
//declaration of const //
const half = .5;
console.log(half)
//constants cannot be reassigned
//half = .25 would cause an TypeError: Assignment to constant variable

//6. Hoisting:
/**
 * Variable declarations are hoisted to the top of their scope when javascript is compiled.
 * This allows you to access values before they are declared. In the example below, var firstName;
 * would be hoisted to the top of the code. This would result in firstName existing, but being undefined
 * until assigned. The first console.log will show undefined, the second 'Alec.'
 */
console.log(firstName)
var firstName = 'Alec'
console.log(firstName)
/**
*Let and const declarations are not hoisted to the top of their scope. If you attempt to access them before
*they are declared, it will result in a ReferenceError
 */
/**In the example below, console.log(potato) before a declaration would result in 
 * ReferenceError: Cannot access 'potato' before initialization
*/
let potato = 'baked'
console.log(potato)

let scopeExample = function(cond){
let mess = `I'm outside`; //in the outer block scope of the function, mess is set to I'm outside
if(cond){
    let mess = `I'm inside` //in the inner block scope of the function, mess is set to I'm inside
    console.log(mess) //this will log I'm inside
}
console.log(mess)//this will log I'm outside
}
scopeExample(true); // this will log both I'm inside and I'm outside because cond is true and the let variables are block scoped
scopeExample(false); //this will log I'm outside because the cond is false and the outer block scope console log statement is I'm outside
