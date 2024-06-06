/*******************************************
    Iteration 1 | Find index of a character
*******************************************/
// Write code that prints out to the console the index of the character “j” in

const string1 = "My favorite dessert is jello";

// Your code here...
const index = string1.indexOf("j")
console.log(`1. j index: ${index}`)


/*******************************************
    Iteration 2 | Concatenate Characters
*******************************************/
// Make a new string with the text "COOL" by using only the characters available in the provided string and the bracket notation

const string2 = "ABCDEFGHJKLO";

// Your code here...
let newString = ""

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < string2.length; j++) {
        if (newString.length === 0) {
            if (string2[j] === "C") {
                newString += string2[j];
                break;
            }
        }
        else if (newString.length < 3) {
            if (string2[j] === "O") {
                newString += string2[j];
                break;
            }
        }
        else {
            if (string2[j] === "L") {
                newString += string2[j];
                break;
            }
        }
    }
}
console.log(`2. new string: ${newString}`);



/*****************************************************
    Iteration 3 | Repeat a String and Concatenate
*****************************************************/
// Using the method .repeat() and the provided string, print out the text "NaNaNaNa Batman!" in the console.

const string3 = "Na";

// Your code here...

console.log(`3. new string: ${string3.repeat(4)} Batman!`)


/*******************************************
       Iteration 4 | Fruite Slice
*******************************************/
// Using the string method .slice(), access and print to the console the name of your favorite fruit from a given string

const fruit = "banana apple mango orange lemon kiwi watermelon grapes pear pineapple";

// Your code here...
let favoriteFruit = "watermelon";


console.log(`4. favorite fruit: ${fruit.slice(fruit.indexOf("watermelon"), (fruit.indexOf("watermelon") + favoriteFruit.length))}`)


/***************************************************
    Iteration 5 | Check If Strings Include a Word
***************************************************/
// Using the string method .include(), check if the below strings with funny newspaper headlines include the word "oxygen".
// If a string includes the word "oxygen" print to the console message "The string includes the word 'oxygen'",
// else print the message "The string does not include the word 'oxygen'".

const funnyHeadline1 = "Breathing oxygen linked to staying alive";
const funnyHeadline2 = "Students Cook & Serve Grandparents";


// Check the first headline
// Your code here ...
const wordToCheck = "oxygen";

function checkString(string, word) {
    if (string.includes(word)) {
        return `The string includes the word '${word}'.`;
    }
    else {
        return `The string does not include the word '${word}'.`;
    }
}

// Check the second headline
// Your code here ...
console.log(`5a first string: ${checkString(funnyHeadline1, wordToCheck)}`);
console.log(`5b second string: ${checkString(funnyHeadline2, wordToCheck)}`)


/*******************************************
       Iteration 6 | String Length
*******************************************/
// Using console.log() print to the console the length of the string and the last character in the string.

const string4 = "zEAWrTC9EgtxmK9w1";


// a) Print the string length
// Your code here ...
console.log(`6a. length of string: ${string4.length}`);


// b) Print the last character in the string
// Your code here ...
console.log(`6b. last character: ${string4[string4.length - 1]}`)
