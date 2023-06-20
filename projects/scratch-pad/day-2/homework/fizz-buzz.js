// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    //loop through 1-100
for(let i = 1; i <= 100; i++){
    //if current index is divisible by 3 and 5 log 'FizzBuzz'
    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
//else if index is divisible by 3 log 'Fizz'
    } else if(i % 3 === 0){
console.log('Fizz');
    }
    //else if index is divisible by 5 log 'Buzz'
    else if(i % 5 === 0){
        console.log('Buzz')
    //otherwise log index
    } else{
        console.log(i);
    }
}


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}