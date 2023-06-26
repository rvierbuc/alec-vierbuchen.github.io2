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
function search(array, string){
    for(let i = 0; i < array.length; i ++){
        if(array[i].name === string){
            return array[i];
        }
        
    }
    return null;
} 


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(array, string, object){
    for(let i = 0; i < array.length; i ++){
        if(array[i].name === string){
            array[i] = object;
        }
    }
    return array;
};


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(array, string){
    for(let i = 0; i < array.length; i ++){
            if(array[i].name === string){
                array.splice(i, 1);
            } 
        }
        return array;
    } 



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


/*
 * You did it! You're all done with Matchy!
 */

function add(array, object){
    if(object.name.length > 0 && object.species.length > 0 && search(array, object.name) === null){
        array.push(object);
    }
    return array;
}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
