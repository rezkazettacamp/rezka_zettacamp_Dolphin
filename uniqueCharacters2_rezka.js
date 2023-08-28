/*
Title: Unique Characters

Description:
Write a function named hasUniqueCharacters that takes a string as input and returns true if the string contains all unique characters, and false otherwise. You can assume that the string contains only lowercase alphabets (a-z).
Set adalah objek yang berisikan nilai-nilai yang bersifat unik, artinya dalam objek tersebut hanya ada satu nilai saja
set.size – adalah hitungan elemen

Example:
console.log(hasUniqueCharacters("abcdefg")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false
*/

function hasUniqueCharacters(str) {
    return new Set(str).size == str.length; 
}

console.log(hasUniqueCharacters('abcdefg'));
console.log(hasUniqueCharacters('hello'));