/**
 *
 * Write a Node.js function isPrime(n) that takes an integer n as an argument and returns true if n is a prime number and false otherwise.
 * Bilangan bulat lebih besar dari 1 dan hanya memiliki dua faktor pembagi yang berbeda, yaitu 1 dan bilangan itu sendiri.
 */
function isPrime(n) { // parameter n
    for (let i = 2; i < n; i++) { // variabel nilai awal, terminasi (kondisi berhenti dari pengulangan), increment
        if(n % i === 0) { // modulus
            return false; // jika iya, maka bukan bilangan prima
        };
    };
      return n > 1; // jika tidak, maka bilangan prima dan nilai juga harus lebih besar dari 1
  }
  
  console.log(isPrime(10)); // false
  console.log(isPrime(43)); // true
  console.log(isPrime(47));
  console.log(isPrime(1));
  console.log(isPrime(-10));