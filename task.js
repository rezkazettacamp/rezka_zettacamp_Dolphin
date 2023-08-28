let detailsBook = { // obj
    bookTitle: 'Harry Potter and The Philosopher\'s Stone', // escape character
    bookPrice: 100000,
    bookStock: 10,
};

let amountPurchase = 2;
let discount = 20;
let tax = 10;

// memanggil fungsi dengan yang berisi argumen (nilai yang diteruskan ke fungsi saat dipanggil)
BookPurchashing(detailsBook, discount, tax, amountPurchase);

function BookPurchashing(detailsBook, discount, tax, amountPurchase) {
    for (let i = 0; i < amountPurchase; i++) {
        if (detailsBook.bookStock < amountPurchase) {
            console.log('================= Book out of stock =================\nSorry, book not available\n=====================================================');
            break; // Menghentikan perulangan jika jumlah buku sudah habis.
        };

        const remainingStock = detailsBook.bookStock - amountPurchase;
        const amountOfDiscount = (discount / 100) * detailsBook.bookPrice;
        const priceAfterDiscount = detailsBook.bookPrice - amountOfDiscount;
        const amountOfTax = (tax / 100) * priceAfterDiscount;
        const priceAfterTax = priceAfterDiscount + amountOfTax;
        const totalPrice = priceAfterTax * amountPurchase;
        const isBookDiscount = (detailsBook.bookPrice >= 100000);

        console.log('==================== Book Details ===================');
        console.log('Book Title : ' + detailsBook.bookTitle);
        console.log('Book Price : ' + detailsBook.bookPrice);
        console.log('Book Stock : ' + detailsBook.bookStock);
        console.log('Discount book : ' + (isBookDiscount));
        console.log('================== Detail Purchase ==================');
        console.log('Amount of discount : ' + discount + '%');
        console.log('Price after discount : Rp.' + priceAfterDiscount);
        console.log('Amount of tax : ' + tax + '%');
        console.log('Price after tax : Rp.' + priceAfterTax);
        console.log('===================================');
        console.log('Purchase book : ' + amountPurchase);
        console.log('Total Price : Rp.' + totalPrice);
        console.log('=====================================================');

        if (remainingStock == 0) {
            console.log('You can\'t purchase more books\nRemaining Book Stock : ' + remainingStock);
        } else {
            console.log('You can purchase more books\nRemaining Book Stock : ' + remainingStock);
        };
        console.log('=====================================================');
        return; // mengakhiri fungsi
    };
}; 