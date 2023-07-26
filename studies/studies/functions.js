//FUNCTIONS:
/**
 * Functions are blocks of code that can be used to perform some particular task.
 * Functions are reusable and can be called to whenever that task is necessary in 
 * the devoloper's code.
 */
//1. The Two Phases of Functions
/**
 * There are two phases of functions: declaration, and execution. To use a function it must be declared.
 * Declarations define the function and make it exist in the program. Execution causes the function to
 * perform the block of code that is contained within the function.
 */

//2. Difference Between the Function's Parameters and Arguments
/**
 * Functions optionally take parameters. They are placeholders named in the parentheses in the function
 * declaration. They represent the values that will be passed into the function when it is called.
 * Arguments are the actual values passed into the function as parameters.
 */

function double(num){//declares the function, names it double, and gives it the parameter num
    return num * 2;//the code within the function multiplies the parameter num by two.
}
double(4);//executes the function double on the argument four passed in for the parameter num and returns 8.

//3. Syntax for a Named Function:
/**
 * Functions can be named so that they can be called when needed. 
 */
//function declares the function, nameOfFunction names the function
function nameOfFunction(parameter){ //the parameter is enclosed in parentheses
    return parameter;//the function's code is enclosed in curly braces
};

//4. Assigning a Function to a Variable:
/**
 * Functions can be assigned to variables in the same way as any other data type.
 */
const pi = 3.14 //declares a variable pi set to 3.14
const circleArea = function(radius){//declares a variable circleArea and sets it equal to a function
return pi * radius * radius
}

//5. Inputs and Outputs
/**
 * Inputs and outputs are both optional in functions. Inputs are specified by the parameters in the function
 * declaration. Outputs are specified using the return value. Functions do not have to return anything.
 */
let count = 0;//declares a count variable equal to 0
function addCount(){//the function does not have parameters
    count++//the function adds 1 to the count when executed
}//the function has no return value and so no output
addCount()//the function is executed, count is 1
addCount()//the function is executed, count is 2
addCount()//the function is executed, count is 3
console.log(count);//logs 3 to console

//6. Scope
/**Scope defines where variables are accessible in code. Functions can access variables defined within the function, 
* within their parent scope, and in the global scope. Variables declared within the function are not
* accesible outside of the function. These variables are locally scoped. 
*/

function outerFunction() {
    let outer = `I'm outside`; // This variable 'outer' is in the local scope of outerFunction.

    function innerFunction() {
        let inner = `I'm inside.`; // This variable 'inner' is in the local scope of innerFunction.
    }

    // the 'outer' variable here is available inside outerFunction's scope.
    console.log(outer); 
    //You cannot acces the variable inner outside the inner function
    //console.log(inner); if this were included, it would result in ReferenceError: inner is not defined
}

//console.log(outer); here results in ReferenceError: outer is not defined because outer cannot be accessed
//outside of the outer function.
