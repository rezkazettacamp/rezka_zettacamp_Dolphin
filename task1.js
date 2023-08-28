let myProfile = ['Rezka', 26, 'UMY'];

let favBook1 = 'Sherlock Holmes';
const favBook2 = 'Detective Conan';

favBook1 = 'Harry Potter';
// favBook1 = 'Detective Conan';
// favBook2 = 'Narnia';

let myFavBook = favBook1.concat(' and ' + favBook2);
let isFavBookSame = favBook1 == favBook2;

// template literals
console.log(
    `My name is ${myProfile[0]}. I am ${myProfile[1]} years old. I graduated from ${myProfile[2]}. My Favorite book is ${myFavBook}.`
);
console.log('Same book : ' + isFavBookSame);