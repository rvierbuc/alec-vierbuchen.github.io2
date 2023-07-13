// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./alec-vierbuchen.github.io2/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
//return the length of the array created by filtering the data for where the object's key gender's value is male
    return _.filter(array, function(current){return current.gender === 'male';}).length;
};

var femaleCount = function(array) {
    return _.reduce(array, function(count, current) {
        if (current.gender === 'female') {
            return count + 1;
        } else {
            return count;
        }
    }, 0);
};


var oldestCustomer = function(array){
    let oldest = _.reduce(array, function(accumulator, current){
        if(current.age > accumulator.age){
            accumulator = current;
        }
        return accumulator;
    })
    return oldest.name;
};

var youngestCustomer = function(array){
    let youngest = _.reduce(array, function(accumulator, current){
        if(current.age < accumulator.age){
            accumulator = current;
        }
        return accumulator;
    })
    return youngest.name;
};

var averageBalance = function(array) {
    //create a count variable
    let count = 0;
    //create a running total of balances and use reduce to add all balances
    let balanceSum = _.reduce(array, function(accumulator, current) {
        //if current item has a balance
        if (current.balance) {
            //create a variable balance that is a number with the non-numeric characters removed
            const balance = parseFloat(current.balance.replace(/[^0-9.-]+/g,""))
            //set accumulator equal to accumulator plus the current balance
            accumulator += balance;
            //add to the count
            count++;
        }
        //return the sum of all balances
        return accumulator;
    }, 0);
//return the sum of all balances divided by the count
    return balanceSum / count;
};

var firstLetterCount = function(array, letter) {
    return _.reduce(array, function(accumulator, current) {
        if (current.name[0].toLowerCase() === letter.toLowerCase()) {
            accumulator += 1;
        }
        return accumulator;
    }, 0);
};

var friendFirstLetterCount= function(array, name){
    const result = [];
    
    array.forEach(customer => {
      if (customer.friends.includes(name)) {
        result.push(customer.name);
      }
    });
    
    return result;
  };
  

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
