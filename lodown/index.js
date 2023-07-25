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
 * @returns {Number} action: returns the index of the array where the value first occurs. If the value is not in the array it returns -1.
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
 * @returns {Boolean} action: returns true if the array contains the value. If the value is not in the array it returns false.
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
 * unique: Designed to loop over an array and returns an array of the non-duplicate values.
 * 
 * @param {Array} array: The array over which to iterate.
 * @returns {Array} action: Returns an array of non-duplicate values
 */
function unique(array){
    let result = [];
    for(let i = 0; i < array.length; i++){
    if (_.indexOf(result, array[i]) === -1){
        result.push(array[i]);
    }
    }
    return result;
};
module.exports.unique = unique;

/** 
 * filter: Designed to loop over an array, calls a function on each element, and returns an array for which the function is true.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} function: The test function to check if the element in the area evaluates to true or false.
 * @returns {Array} action: returns an array of the elements which evaluate to true when the test function is applied to them.
 * 
 */

function filter(array, func){
    let result = [];
   _.each(array, function(element, index, collection){
        if (func(element, index, collection) === true){
            result.push(element)
        }
        });
    
    return result;
};

module.exports.filter = filter;

/** 
 * reject: Designed to loop over an array, call the function on each element, and return an array for which the function is false.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} function: The test function to check if the element in the area evaluates to true or false.
 * @returns {Array} action: returns an array of the elements which evaluate to false when the test function is applied to them.
 * 
 */

function reject(array, func){
    let result = [];
   _.each(array, function(element, index, collection){
        if (func(element, index, collection) === false){
            result.push(element)
        }
        });
    
    return result;
}

module.exports.reject = reject;

/** 
 * partition: Designed to loop over an array, call the function on each element, and return an array for which the function is false.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} function: The test function to check if the element in the array evaluates to true or false.
 * @returns {Array} action: returns an array of two sub arrays, one containing the elements which evaluate to true and the other the elements that evaluate to false when the test function is applied to them.
 */

function partition(array, func){
    return [_.filter(array, func), _.reject(array, func)];
    }

    module.exports.partition = partition;

/** 
 * map: Designed to loop over a collection, call the function on each element, save the transformed values in a new array, and return the new array.
 * 
 * @param {Array or Object} Collection: The collection over which to iterate.
 * @param {Function} function: The function to apply to each element in the collection.
 * @returns {Array or Object} action: returns a new collection of the old collection's values with the function applied to each element.
 */

function map (collection, func){
    let result = [];
    _.each(collection, function(element, index, collection){
    result.push(func(element, index, collection))
});
return result;
}

module.exports.map = map;

/** 
 * pluck: Designed to loop over a collection, call the function on each element, save the transformed values in a new array, and return the new array.
 * 
 * @param {Array} Array: An array of objects over which to iterate.
 * @param {Property} property: The property to select the values of.
 * @returns {Array} action: returns an array of the properties for every element in the array 
 */

function pluck (array, property){
    return _.map(array, function(object){
        return object[property];
    })
};

module.exports.pluck = pluck;

/** 
 * every: Designed to loop over a collection, call the function on each element, and return the true if the function evaluates to true for all elements or false if not.
 * 
 * @param {Array or Object} Collection: The collection over which to iterate.
 * @param {Function} function: The function to apply to every element and determine if it evaluates to true.
 * @returns {Boolean} action: return true if the function applied to all elements in the collection evaluates to true, otherwise return false.
 */

function every(collection, func){
    let result = true;
    _.each(collection, function(element, index, collection){
        if(func === undefined){
            if(!element){
                result = false;
                return false;
            }
        } else{
            if(!func(element, index, collection)){
                result = false;
                return false;
            }
        }
    });
    return result;
};

module.exports.every = every;

/** 
 * some: Designed to loop over a collection, call the function on each element, and return true if the function evaluates to true for any elements and false if not.
 * 
 * @param {Array or Object} Collection: The collection over which to iterate.
 * @param {Function} function: The function to apply to every element and determine if any evaluate to true.
 * @returns {Boolean} action: return true if the function applied to any elements in the collection evaluates to true, otherwise return false.
 */

function some(collection, func){
    let result = false;
    _.each(collection, function(element, index, collection){
        if(func === undefined){
            if(element){
                result = true;
                return false;
            }
        } else{
            if(func(element, index, collection)){
                result = true;
                return false;
            }
        }
    });
    return result;
}

module.exports.some = some;

/** 
 * reduce: Designed to loop over an array, call the function on each element use the result when applying the function to the next element, and return the value of the final function call.
 * 
 * @param {Array} Array: The array over which to iterate.
 * @param {Function} function: The function to apply to each element.
 * @param {Seed} function: The default value to pass in as the initial result of a function call on an element.
 * @returns {Value} action: returns the cumulative result of the function being called on each element and the result being passed to the seed value.
 */

function reduce(array, func, seed){
    let result = seed;
    _.each(array, function(element, index){
        if(result === undefined){
            result = element;
        } else{
            result = func(result, element, index)
        }
    })
    return result;
}

module.exports.reduce = reduce;

/** 
 * extend: Designed to copy the properties from a number of objects to an object.
 * 
 * @param {Object} Object: The object to which the properties of the other objects will be copied.
 * @param {...Objects} Objects: Any number of additional objects.
 * @returns {Object} action: returns the first object with all of properties from the other object(s) copied to it
 */

function extend(object1, ...objects){
    _.each(objects, function(object){
        _.each(object, function(value, key){
            object1[key] = value;
        })
    })
    return object1;
}

module.exports.extend = extend;

//fin