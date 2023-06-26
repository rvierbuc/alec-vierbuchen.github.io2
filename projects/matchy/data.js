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
//create an empty object called animal
animal = {};
//set animal's species equal to Cat
animal.species = 'Cat';
//set animal's name to Serpico
animal.name = 'Serpico';
//set noises to an empty array
animal.noises = [];
//log the object
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//a noises array as an empty array
var noises = [];
//add meow to noises with bracket notation
noises[0] = 'Meow';
//add hiss to to noises with push
noises.push('Hiss');
//add scratching to array with unshift
noises.unshift('Scratching');
//add purring to the end of the array
noises[noises.length] = 'Purring';
//log noises length
console.log(noises.length);
//log the last item in the array
console.log(noises[noises.length - 1]);
//log the array
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//add the noises array to the animal object
animal.noises = noises;
//add tiny mew to the noises array in the animal object
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
//create an empty array called animals
var animals = [];
//add the animal object to the array
animals.push(animal);
//log the array
console.log(animals);
//create a duck object
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
//add duck object to the animals array
animals.push(duck)
//create a cow object
var cow = { species: 'cow', name: 'Bessie', noises: ['moo', 'low', 'snort', 'stamp']};
//add cow to the animals array
animals.push(cow);
//create a snake object
var snake = { species: 'snake', name: 'Arthur', noises: ['hiss', 'sussurus', 'tongue flick']};
//add snake to the animals array
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
//create an empty array called friends
var friends = [];
//create a function called get random that generates a random integer corresponding to the array index
function getRandom(array){
  return Math.floor(Math.random() * array.length);
}
//push
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