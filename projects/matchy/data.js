/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal = {};
animal.species = 'Cat';
animal.name = 'Serpico';
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'Meow';
noises.push('Hiss');
noises.unshift('Scratching');
noises[noises.length] = 'Purring';
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises;
animal.noises.push('Tiny Mew');


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************

*/
//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck)
var cow = { species: 'cow', name: 'Bessie', noises: ['moo', 'low', 'snort', 'stamp']};
animals.push(cow);
var snake = { species: 'snake', name: 'Arthur', noises: ['hiss', 'sussurus', 'tongue flick']};
animals.push(snake);

/*
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
## Step 7 - Making Friends

Imagine that our website has a profile page for each animal. On this profile page we can see a list of each animal's friend on the website. Just like how people have a list of friends or followers on facebook or instagram. What would be a good data structure to hold this list of friends?

 1. [ ] Choose a data structure for this **list** of friends.
 2. [ ] Write a comment in your code that explains why you chose this data structure.
 3. [ ] Create a variable called `friends` and assign it to the data structure that you chose.
 4. [ ] Take a look at the documentation for `Math.random` here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 5. [ ] Write a function called `getRandom` that takes our `animals` array and returns  a random `index` of the input array, using `Math.random`
 6. [ ] Using a random index from this function that you just created, get a random animal and add its `name` to `friends`.
 7. [ ] `console.log` `friends`.
 8. [ ] Using **bracket notation**, add the `friends` list as a **property** also named `friends` on one of the animals in the `animals` array
 9. [ ] `console.log` your work.
*/
//arrays are good for ordered lists and there will not be a key, so it shouldn't be an object
var friends = [];
function getRandom(array){
  return Math.floor(Math.random() * array.length);
}
friends.push(animals[getRandom(animals)].name);
console.log(friends);
animals[getRandom(animals)].friends = friends;

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}