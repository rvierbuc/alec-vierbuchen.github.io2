// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    //return an object with the inputs
    return{
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast}
    } 
    
    
    function makeContactList() {
        /*
         * You need something here to hold contacts. See length api for a hint:
         */
        var contacts = [];
        
        return {
            // we implemented the length api for you //
            length: function() {
                return contacts.length;
            },
            addContact(contact){
            contacts.push(contact);
        },
        //findContact is a function that takes a string of a full name
        findContact: function(fullName){
            //create a storage array that splits the name at a space
            let store = fullName.split(' ')
            //loop through contacts
            for(let i = 0; i < contacts.length; i++){
            //set current equal to contact accessed by current index value
            let current = contacts[i]
            //if the first name and last name match the array values, return the current contact
                if(store[0] === current.nameFirst && store[1] === current.nameLast){
                return current;
            }
            }
            //otherwise return undefined
            return undefined;
        },
        //removeContact is a function that takes a contact object
        removeContact: function(contact){
            //loop through contacts array
            for (let i = 0; i < contacts.length; i++) {
                //if the current contact matches the inputted contact, splice it out
                if (contacts[i] === contact) {
                    contacts.splice(i, 1);
                }
              }
              //return the updated contacts
              return contacts;
            },
        //printAllContactNames is a function that doesn't need an input    
        printAllContactNames: function(){
            //create a storage array
            let store = [];
            //loop through contacts
            for(let i = 0; i < contacts.length; i++){
                //current index value object is defined as current
                let current = contacts[i]
                if(i < contacts.length - 1){
                //push the first name a space and the last name from the current object into the array
                store.push(current.nameFirst + ' ' + current.nameLast +'\n');
                }else{
                    store.push(current.nameFirst + ' ' + current.nameLast);
                }
                //return the storage array joined by new line characters.
            }
            return store.join('')
            }
            
        }
            };
    



// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
