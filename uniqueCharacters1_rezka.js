/*
Title: Unique Characters

Description:
Write a function named hasUniqueCharacters that takes a string as input and returns true if the string contains all unique characters, and false otherwise. You can assume that the string contains only lowercase alphabets (a-z).

Example:
console.log(hasUniqueCharacters("abcdefg")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false
*/

function hasUniqueCharacters(str) {
    for (let i = 0; i < str.length; i++) { 
        for (let x = i + 1; x < str.length; x++) {
            if (str[i] == str[x]) {
                return false;
            };
        };
    };
    return true;
};

console.log(hasUniqueCharacters("abcdefg")); // Output: false
console.log(hasUniqueCharacters("hello")); // Output: true
console.log(hasUniqueCharacters("kakiku")); // Output: false
