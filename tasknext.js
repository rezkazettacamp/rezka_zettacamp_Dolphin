let myProfile = { //key
    myName : 'Rezka',
    myAge : 26,
    favBook1 : 'Sherlock Holmes',
};
myProfile.favBook2 = 'Detective Conan';
console.log(
    `My name is ${myProfile.myName}. I am ${myProfile.myAge} years old. My Favorite book is ${myProfile.favBook1} and ${myProfile.favBook2}.`
);

let isFavBookSame = myProfile.favBook1 == myProfile.favBook2;
console.log(`Same book : ${isFavBookSame}`);

let favBook1Price = 700000;
let favBook2Price = 400000;

// ternary
let highestPrice = favBook1Price > favBook2Price ? favBook1Price : favBook2Price;
console.log(`Highest book price : ${highestPrice}`);

let averageBookPrice = (favBook1Price + favBook2Price) / 2;
console.log(`Average book price : ${averageBookPrice}`);

let bookValue = (averageBookPrice > 500000) ? 'Expensive' : 'Cheap';
console.log(`Book value : ${bookValue}`);