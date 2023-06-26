/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

const { animals } = require("./data");

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function called search that takes and array and a string as arguments
function search(array, string){
//loop through the array
    for(let i = 0; i < array.length; i ++){
//if the current item in the array's name property matches the string return the current array item
        if(array[i].name === string){
            return array[i];
        }
        
    }
//otherwise return null
    return null;
} 


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function called replace that takes an array, a string, and an object
function replace(array, string, object){
//loop through the array
    for(let i = 0; i < array.length; i ++){
//if the current item in the array's name property is the same as the string, replace the current item with object
        if(array[i].name === string){
            array[i] = object;
        }
    }
//return the array
    return array;
};


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function called remove that takes an array and a string
function remove(array, string){
//loop through the array
    for(let i = 0; i < array.length; i ++){
//if the current item in the array's name property is the same as the string delete the current item        
            if(array[i].name === string){
                array.splice(i, 1);
            } 
        }
    //return the array    
        return array;
    } 



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function add that takes an array and an object as arguments
function add(array, object){
//if the object name isn't blank and the object species isn't blank, and no object in the array has the object's name property
    if(object.name.length > 0 && object.species.length > 0 && search(array, object.name) === null){
//add the item to the array
        array.push(object);
    }
}

/*
 * You did it! You're all done with Matchy!
 */

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
