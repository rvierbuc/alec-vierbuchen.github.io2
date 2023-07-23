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

var friendFirstLetterCount = function(array, customer, letter) {
    return _.reduce(array, function(accumulator, current) {
      if (current.name === customer) {
        accumulator = current.friends.reduce(function(accumulator, friend) {
          if (friend.name[0].toLowerCase() === letter.toLowerCase()) {
            return accumulator + 1;
          }
          return accumulator;
        }, 0);
      }
      return accumulator;
    }, 0);
  };
  
  

  var friendsCount = function(array, name) {
    if (!name) {
        return [];
      }
    
      const lowercaseName = name.toLowerCase();
    
      const result = array.filter((customer) => {
        for (let i = 0; i < customer.friends.length; i++) {
          if (customer.friends[i].name.toLowerCase() === lowercaseName) {
            return true;
          }
        }
        return false;
      });
    
      return result.map((customer) => customer.name);
    }
  
  

var topThreeTags = function(array){
//create an object to store the tag totals
    var tagTots = {};
//for each element of the array
    array.forEach(function(customer){
//tags is the current customer tags
        var tags = customer.tags;
//for each element of tags
        tags.forEach(function(tag){
//if the tag exists in the tagTots object, add one to it
            if(tagTots[tag]){
                tagTots[tag]++
//if the tag does not exist in the object, create it and set it equal to 1
            }else{
                tagTots[tag] = 1;
            }
        });
    });
//create an array called store that is the entries from the object tagTots
let store = Object.entries(tagTots);
//sort the array is descending order based on the count
store.sort(function(a, b){
    return b[1] - a[1];
});
//the top three values are the first three values in the sorted array
let topThreeValues = store.slice(0, 3);
//map names of the top three values to a result array
let result = topThreeValues.map(function(count){
    return count[0];
})
//return the result
return result;
};

var genderCount = function(array){
    //iterate with reduce and accumulate the genders
    return array.reduce(function(accumulator, current){
        //if current gender is truthy in obj add one, or if falsy set it equal to zero and add one
        accumulator[current.gender] = (accumulator[current.gender] || 0) + 1;
        //return the accumulator
        return accumulator;
    }, {});
};

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
