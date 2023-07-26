//CONTROL FLOW:

//1. If
/**
 * If is a conditional. It will execute a block of code if the condition evaluates to true.
 * If the condition is false, the block of code will not execute.
 */

let thing = true;//sets thing equal to true
if(thing){
    console.log('there is a thing')
}//this if statement will log 'there is a thing' because thing is true
thing = false
if(thing){
    console.log('there is a thing')
}//this statement will not log anything because thing is false.

//2. Else-if Statement
/**
 * Else if is chained onto an if statement. It will execute a blockj of code if the if
 * statement preceding it evaluates to false and the condition in the else-if statement
 * evaluates to true
 */
let test = false//sets test equal to false
if(test){
    console.log('test is true')//will not execure because test is false
}else if(!test){//because test is false, !test will evaluate to true
    console.log('test is false')//will log 'test is false' to console.
}

//3. Else Statement
/**
 * The else statement is chained onto an if statement and/or an else-if statement.
 * The else statement will execute if the if and else-if statements preceding it in
 * the chain evaluate to false. It will does not evaluate a condition itself.
 */

let food = 'toast';//sets food equal to toast
if(food === 'oatmeal'){//evaluates to false because food is not equal to oatmeal
    console.log('oatmeal is a hearty breakfast')//will not execute
}else if(food ===  'eggs'){//evaluates to false because food is not equal to eggs
    console.log('eggs are a good source of protein')//will not execute
}else{//does not evaluate a condition
    console.log('You are not having oatmeal or eggs.')//logs to console
}

//4. Switch Statement

/**
 * Switch statements are more versatile than if-else statements. Switch statements
 * evaluate a series of cases and execute the block of code that matches the case.
 */

let breakfast = 'oatmeal';
switch(breakfast){//switch opens with the value it is acting on
    case 'oatmeal'://evaluates that the case breakfast is oatmeal
        console.log('oatmeal is a hearty breakfast');//logs to console becuase the case is oatmeal
        break;//leaves the switch statement
    case 'eggs'://code is not evaluated
        console.log('eggs are a good source of protein');//will not execute
        break;//would leave the switch statement if the code was reached
    default://like the else above, the code block will execute if the case of breakfast does not exist above.
        console.log('You are not having oatmeal or eggs.');
}
