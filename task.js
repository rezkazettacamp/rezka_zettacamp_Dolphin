const detailsBook = { // obj
    bookTitle : 'Harry Potter and The Philosopher\'s Stone', // escape character
    bookPrice : 100000,
};

const discount = 20;
const tax = 10; 

// memanggil fungsi dengan yang berisi argumen (nilai yang diteruskan ke fungsi saat dipanggil)
BookPurchashing(detailsBook, discount, tax);

function BookPurchashing (detailsBook, discount, tax) {
    const amountOfDiscount = (discount / 100) * detailsBook.bookPrice;
    const priceAfterDiscount = detailsBook.bookPrice - amountOfDiscount;
    const amountOfTax = (tax / 100) * priceAfterDiscount;
    const priceAfterTax = priceAfterDiscount + amountOfTax;
    const isBookDiscount = (detailsBook.bookPrice >= 100000);

    console.log('==================== Book Details ===================');
    console.log('Book Title : ' + detailsBook.bookTitle);
    console.log('Book Price : ' + detailsBook.bookPrice);
    console.log('================== Book Purchashing =================');
    console.log('Amount of discount : Rp.' + amountOfDiscount);
    console.log('Price after discount : Rp.' + priceAfterDiscount);
    console.log('Amount of tax : Rp.' + amountOfTax);
    console.log('Price after tax : Rp.' + priceAfterTax);
    console.log('=====================================================');
    console.log('Discount book : ' + isBookDiscount);
    console.log('=====================================================');
    return; // mengakhiri fungsi
};