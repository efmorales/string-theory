// ### Guidelines

// * Other than `.toUpperCase` and `.toLowerCase`, don't use any string methods. Sure, `.slice` would be nice here, but you'll learn just a ton more if you use actual loops!

// ### Task

// Your task is to write a series of functions that execute the following tasks:

// * `xify` - returns the same string, but with every character replaced by an 'x'
//   * Examples:
//     * xify('hello') -> 'xxxxx'
//     * xify('hi there') -> 'xxxxxxxx'


console.log ("#1 xify \n")

// How might we create a program that replaces all String indexes for "x" by the same length of the initial string


// How can I replace every character with an 'x'

let i = 0;
let sum = "";
let xChange = "x";

function xify(stringEx){
    while (stringEx.length > i){
        sum = xChange + sum;
        i++;
    }
    console.log(sum)
}

xify ("dog")
xify ("Enzo")
xify ("phone")

console.log ("\n")


// * `yellingChars` - returns the given string with an exclamation point after each character
//   * Examples:
//     * yellingChars('goodness') -> 'g!o!o!d!n!e!s!s!'
//     * yellingChars('oh hello') -> 'o!h! !h!e!l!l!o!'
//   * Hints:
//     * We can add more than one thing to the string each time through the loop. In this case, it's the current character AND an exlamation point.

console.log ("#2 yellingChars \n");
    
function yellingChars(yellingString){
    let resultS = "";
    let yellC = "";
    for (let i = 0; yellingString.length > i; i++){
        yellC = yellingString[i] + "!";
        resultS = resultS + yellC;
    }
    return resultS;
}

let pokeSquirtle = yellingChars("Squirtle");
let pokeCharmander = yellingChars("Charmander");
let pokeBulbasaur = yellingChars("Bulbasaur");

console.log (pokeSquirtle);
console.log (pokeCharmander);
console.log (pokeBulbasaur);

console.log ("\n");

// * `indexedChars` - adds the index of each character before that character in the given string
//   * Examples:
//     * indexedChars('hello') -> '0h1e2l3l4o'
//     * indexedChars('bye') -> '0b1y2e'
//   * Hints: 
//     * We can add something BEFORE the current character as well!

console.log ("#3 indexedChars");

function indexedChars(indexedString){
    let x = "";
    let resultIndex = "";
    for (let i = 0; indexedString.length > i; i++){
        x = String(i) + indexedString[i];
        resultIndex = resultIndex + x;
        }
    return resultIndex;
}

console.log(indexedChars("laptop"));
console.log(indexedChars("desktop"));
console.log(indexedChars("tablet"));

console.log("\n");
// * `exclaim` - returns the given sentence with every question mark or period changed to an exclamation point
//   * Examples:
//     * exclaim('What are you doing? Are you a fool?') -> 'What are you doing! Are you a fool!'
//     * exclaim('This is fine.') -> 'This is fine!'

console.log ("#4 exclaim");


function exclaim(test){
    let newTest = ""
    for (index = 0; test.length > index; index++){
        if(test[index] === "?" || test[index] === "."){
            newTest += "!";
        } else {
            newTest += test[index];
        }
    }
    return newTest
}

console.log(exclaim(".what?"))
console.log(exclaim("What are you doing? Are you a fool?"))
console.log(exclaim("This is fine."))

console.log("\n")


// * `truncate` - shortens a long string to 15 characters plus an ellipsis (...)
//   * Examples:
//     * truncate('The fault, dear Brutus, is not in our stars, but in ourselves.') -> 'The fault, dear...'
//     * truncate("Well, that's just, like, your opinion man.") -> "Well, that's ju..."

console.log("#5 truncate")


function truncate(longString){
    let newLongStr = "";

    for (let i=0; longString.length > i; i++){
        if (longString.length > 15){
            newLongStr = longString.substring(0,15) + "(...)";
        } else {
            newLongStr += longString[i];
        }

    }
    return newLongStr
}

console.log(truncate("Hi, this is a test to see if this works correctly!"));
console.log(truncate("This is enough"));

console.log("\n");


// * `ciEmailify` - creates an email from a two-part name
//   * Examples:
//     * ciEmailify('colin jaffe') -> 'colin.jaffe@codeimmersives.com'
//     * ciEmailify('Anthony DeRosa') -> 'anthony.derosa@codeimmersives.com'

console.log("#6 ciEmailfy");


function ciEmailify(emailString){
    let newStr = "";

    for (let i = 0; emailString.length > i; i++){

        if (emailString[i] === " "){
            newStr += ".";
        } else {
             newStr += emailString[i];
        }
        
    }
    return newStr.toLowerCase() + "@codeimmersives.com";
}

console.log(ciEmailify("Enzo Morales"));
console.log(ciEmailify("Anthony De Rosa"));
console.log("\n");


// * `reverse` - reverses the given string
//   * Examples:
//     * reverse('colin') -> 'niloc'
//     * reverse('mesuara') -> 'arausem'

console.log("#7 reverse");

function reverse(stringReverse){
    let newRev = "";
    for(let i = stringReverse.length-1; i>=0 ; i--){
        newRev += stringReverse[i]; 
    }
    return newRev;
}

console.log(reverse("enzo"));
console.log(reverse("colin"));
console.log(reverse("mesuara"));

console.log("\n");


// * `onlyVowels` - returns only the vowels from a word
//   * Examples:
//     * onlyVowels('Colin Jaffe') -> 'oiae'
//     * onlyVowels('quickly') -> 'ui'
//     * onlyVowels('Anthony DeRosa') -> 'Aoeoa'

console.log("#8 onlyVowels");

function onlyVowels(stringVowel){

    let finalString = "";

    for (let i = 0; stringVowel.length > i; i++){
        if (stringVowel[i].toLowerCase() === "a" || stringVowel[i].toLowerCase() === "e" ||stringVowel[i].toLowerCase() === "i" || stringVowel[i].toLowerCase() === "o" || stringVowel[i].toLowerCase() === "u") {

            finalString += stringVowel[i];

        }

    }

    return finalString
    
}

console.log(onlyVowels("Apocalypse"));
console.log(onlyVowels("Gigantomachia"));

console.log("\n")


// ## Extra stretch goals

// * `crazyCase` - returns the given string with alternating lower and upper cases
//   * Examples:
//     * crazyCase('hello') -> 'hElLo'
//     * crazyCase('multiple words here') -> 'mUlTiPlE WoRdS HeRe'
//     * crazyCase('YELLING') -> 'yElLiNg'
// * `titleCase` - returns a transformed version of the given string where every word starts with a capital letter and every non-word-starting letter is lowercased
//   * Examples:
//     * titleCase('return of the king') -> 'Return Of The King'
//     * titleCase('cOde iMMerSives') -> 'Code Immersives'
// * `camelCase` - returns the given string in camel case
//   * Examples:
//     * camelCase('oh Hello') -> 'ohHello'
//     * camelCase('well yeah of course') -> 'wellYeahOfCourse'
//     * camelCase('Boy howdy') -> 'boyHowdy'
// * `crazyCase2ReturnOfCrazyCase` - same as `crazyCase`, but does NOT count spaces as letters to upper or lower case (see examples below!)
//   * Examples:
//     * crazyCase2ReturnOfCrazyCase('multiple words here') -> 'mUlTiPlE wOrDs HeRe'
//     * crazyCase2ReturnOfCrazyCase('crazy stuff') -> 'cRaZy StUfF'
