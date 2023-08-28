let myProfile = ['Rezka', 26, 'UMY'];

let favBook1 = 'Sherlock Holmes';
const favBook2 = 'Detective Conan';

// favBook1 = 'Harry Potter';
// favBook2 = 'Narnia';

let favBook1Price = 600000;
let favBook2Price = 400000;

// ternary
let highestPrice = favBook1Price > favBook2Price ? favBook1Price : favBook2Price;

let averageBookPrice = (favBook1Price + favBook2Price) / 2;

let bookValue = (averageBookPrice > 500000) ? 'Expensive' : 'Cheap';

let myFavBook = favBook1.concat(' and ' + favBook2);

// template literals
console.log(
    `My name is ${myProfile[0]}. I am ${myProfile[1]} years old. I graduated from ${myProfile[2]}. My Favorite book is ${myFavBook}.`
);
console.log('Highest book price : ' + highestPrice);
console.log('Average book price : ' + averageBookPrice);
console.log('Book value : ' + bookValue);