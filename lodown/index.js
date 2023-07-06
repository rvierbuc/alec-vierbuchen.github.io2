'use strict';
const module = {};
// YOU KNOW WHAT TO DO //

/** 
 * identity: takes in a value and returns it unchanged
 * 
 * @param {Value} value  : function takes in any value
 * @returns {Value} returns the value unchcanged 
 */

function identity (value){
    return value;
}
module.exports.identity = identity;

/** 
 * typeOf: takes in a value and returns the type of that value as a string
 * 
 * @param {Value} value  : function takes in any value
 * @returns {String} returns the type of the value as a string 
 */
function typeOf (value){
    if(Array.isArray(value)){
        return 'array'
}    else if(value === null){
        return 'null'
    }
    else{
    return typeof value
};
}
module.exports.typeOf = typeOf;

/** 
 * first: takes in an array and a number and returns the first number elements in the array.
 * @param {Array} array: takes an array
 * @param {Number} number  : any numeric value
 * @returns {Array} returns the first number items in the array. If array is not an array it returns an empty array.
 * if number is not a number it returns the first item in the array. If the number is negative it returns an empty array.
 * If the number is greater than the array's length, it returns the entire array. 
 */
function first (array, number){
    if(!Array.isArray(array)){
        return [];
    } else if(!_.typeOf(number) === 'number' || !number){
        return array[0];
    } else if(array.length < number){
        return array;
    }else{
        let result = [];
        for(let i = 0; i < number; i++){
            result.push(array[i]);
        }
        return result;
    }
}
module.exports.first = first;

/** 
 * last: takes in an array and a number and returns the last number elements in the array.
 * @param {Array} array: takes an array
 * @param {Number} number  : any numeric value
 * @returns {Array} returns the last number items in the array. If array is not an array it returns an empty array.
 * if number is not a number it returns the first item in the array. If the number is negative it returns an empty array.
 * If the number is greater than the array's length, it returns the entire array. 
*/
function last (array, number){
    if(!Array.isArray(array)){
        return [];
    } else if(!_.typeOf(number) === 'number' || !number){
        return array[array.length - 1]
    } else if(array.length < number){
        return array;
    }else if(number < 0){ 
        return [];
    }
    else{
        let result = [];
        for(let i = number - 1; i < array.length; i++){
            result.push(array[i]);
        }
        return result;
    }
}
module.exports.last = last;

/** 
 * indexOf: takes in an array and a value and returns the index of the element in the array where the value first occurs.
 * @param {Array} array: takes an array
 * @param {Value} value  : any value
 * @returns {Number} returns the index of the array where the value first occurs. If the value is not in the array it returns -1.
 * 
*/
function indexOf (array, value){
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;
        }
    }
    return -1;
}
module.exports.indexOf = indexOf;

/** 
 * contains: takes in an array and a value and returns the index of the element in the array where the value first occurs.
 * @param {Array} array: takes an array
 * @param {Value} value  : any value
 * @returns {Boolean} returns true if the array contains the value. If the value is not in the array it returns false.
 * 
*/
function contains (array, value) {
    return array.indexOf(value) !== -1 ? true : false;
  };

module.exports.contains = contains;


/** 
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function identity(value){
    return value
}

function each (collection, func){
    if(Array.isArray(collection)){
    for(let i = 0; i < collection.length; i++){
        func(collection[i], i, collection)
    }
    }
    else {
        for (var key in collection) {
            func(collection[key], key, collection);
        }
    }
    };
module.exports.each = each;

/** 
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
