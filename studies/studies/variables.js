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
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

//4. Let
//1. declaration and assignment //
let num = 22;
num = 11
console.log(num);

//5. Const
//declaration of const //
const half = .5;
console.log(half)
//constants cannot be reassigned
//half = .25 would cause an TypeError: Assignment to constant variable
//Hoisting:
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
