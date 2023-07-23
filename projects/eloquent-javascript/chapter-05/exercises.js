// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
//sets result equal to the reduced array
  let result = array.reduce((accumulator, current) => {
  //returns the concatenation of the current into the accumulator
    return accumulator.concat(current);
}, []);
//returns the result
return result;
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, test, update, body) {
//while the test function enacted on value is true
 while(test(value)){
  //call the body function on the value
  body(value);
  //set the value equal to the value after the update function has been added to it
  value = update(value)
}
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  //loops through array
  for(let i = 0; i < array.length; i++){
  //if the test function on the current item is false, return false
  if(!test(array[i])){
  return false;
}
}
//if all the items return true under the test function, return true
return true;
}

function every(array, test) {
  //uses some to check that every element of the array passes the test function
  return !array.some((element) => !test(element));
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) {
  // creates a variable that will store the text direction
let direction = countBy(string, char => {
  //get the direction of each character in the string
  let result = characterScript(char.codePointAt(0));
  //if the character has a direction, return it, otherwise return none
  return result ? result.direction : 'none';
});
//uses reduce to find the direction that is most common
let dir = direction.reduce((a, b) => a.count > b.count ? a : b).name;
//returns the direction
return dir;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
