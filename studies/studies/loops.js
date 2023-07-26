//LOOPS:
/**
 * Loops allow a developer to execute a block of code a specific number of times,
 * or while a condition is true. They are useful for streamlining repetetive tasks.
 */
//1. While loop:
/**
 * While loops will execute a block of code as long as a condition is true. The condition must be changed
 * by the execution of the codeblock inside of a while loop or they will execute infinitely.
 */

let count = 0;//sets a count variable equal to 0
while(count <= 3){//this code block will execute while the count variable is less than or equal to 3
    console.log(count);//logs the count
    count++//increments the count so that the while loop will not execute infinitely. 
};

//2. For Loop:
/**
 * For loops execute a pre-defined number of times. They set an initialization, a condition, and an incrementation.
 * When the condition is met the loop terminates. 
 */

for(let i = 0; i <= 3; i++){//sets up the for loop
    console.log(i);//logs the index value 'i' to console each time the loop executes 
}

//3. For-In Loop, looping over objects:
/**
 * For-in loops are used to loop over the properties of an iterable value, especially objects.
 * It iterates through the object and executes a block of code on each property.
 */

const alec = {//creates a a sample object
    firstName: 'alec',
    lastName: 'vierbuchen',
    pets: true
};

for(let key in alec){//loops over object
    console.log(`${key}: ${alec[key]}`)//for each property of the object logs the key and the value
}

//4. Looping over Arrays
/**You can cause a loop to execute any number of times, a number of times depending on properties of values in your code, you can loop forwards or backwards,
 * and you can increment by any value. For loops can be used to iterate over iterable values, like arrays.
*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //sets up a sample array
//looping forwards over every other value of an array
for(i = 0; i < arr.length; i += 2){//because the increment increases by two, it access every other index value of the array
console.log(arr[i])//logs every other value of the array starting at the 0 index
}
//looping backwards over an array
for(i = arr.length -1; i >= 0; i--){//index starts at the last value in the array and goes backwards
    console.log(arr[i])//logs the array starting at the last value and ending at the first value
    }
    
