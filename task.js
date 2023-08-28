let profile = ['Rezka', 26, 'UMY'];

let favBook1 = 'Sherlock Holmes';
const favBook2 = 'Detective Conan';

favBook1 = 'Harry Potter';
// favBook2 = 'Narnia';

let myFavBook = favBook1.concat(' and ' + favBook2);

// console.log(
//     'My name is ' + profile[0] + '.' + ' I am ' + profile[1] + ' years old' + '.' + ' I graduated from ' + profile[2] + '.' + ' My Favorite book is ' + myFavBook + '.'
// );

// template literals
console.log(
    `My name is ${profile[0]}. I am ${profile[1]} years old. I graduated from ${profile[2]}. My Favorite book is ${myFavBook}.`
);