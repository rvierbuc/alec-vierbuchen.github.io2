////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(x, y, step = 1) {
  if (x === y || step < 0) {
      return [];
    } else if (x < y) {
      let result = [];
      for (let i = x; i <= y; i += step) {
        result.push(i);
      }
      return result;
    } 
  }
  


////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
let result = 0;
if(array.length === 0){
  return 0;
}
  for(let i = 0; i < array.length; i++){
  result += array[i];
}
return result
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
let result = [];
for(let i = array.length- 1; i >= 0; i--){
  result.push(array[i])
}
return result;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  let count = 0;
  let end = array.length -1;
  while(count < end){
    let store = array[count];
    array[count] = array[end]
    array[end] = store;
    count++;
    end --;
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
//creates rest varibale and sets it equal to null
  let rest = null;
  //loops backwards through the array
for(let i = array.length - 1; i >=0; i--){
//sets rest equal to an object with key value set to current array item and a rest key with a value set to rest
rest = {
  value: array[i], 
  rest: rest
};
}
//returns the rest object
return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(obj, result=[]) {
if(obj.rest === null){
result.push(obj.value)
return result;
}
else{
  result.push(obj.value)
  return listToArray(obj.rest, result);
}
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
return {
        value: element,
        rest: list
      }
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, num) {
let store = listToArray(list);
return store[num];
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
  if(x === y){
    return true;
  }
  if(x === null || y === null){
    return false;
  }
  if (typeof x === 'object' && typeof y === 'object'){
    let keysX = Object.keys(x);
    let keysY = Object.keys(y);
  if (keysX.length !== keysY.length){
    return false;
  }
  for(let key of keysX){
    if(!deepEqual(x[key], y[key])){
      return false;
    }
  }
  return true;
  }

return false;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
