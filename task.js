let detailsBook = { // obj
    bookTitle: 'Harry Potter and The Philosopher\'s Stone', // escape character
    bookPrice: 100000,
    bookStock: 10,
};

let amountPurchase = 2;
let discount = 20;
const tax = 10;
const credit = [];
let creditDuration = 6;

// memanggil fungsi dengan yang berisi argumen (nilai yang diteruskan ke fungsi saat dipanggil)
BookPurchashing(detailsBook, discount, tax, amountPurchase, credit, creditDuration);

function BookPurchashing(detailsBook, discount, tax, amountPurchase, credit, creditDuration) {
    for (let i = 0; i < amountPurchase; i++) {
        if (detailsBook.bookStock < amountPurchase) {
            console.log('================= Book out of stock =================\nSorry, book not available\n=====================================================');
            break; // Menghentikan perulangan jika jumlah buku sudah habis.
        };

        const currentDate = new Date(); //menentukan tanggal hari ini dengan obj date
        currentDate.setMonth(currentDate.getMonth() + 1); //setMonth(mengatur nilai bulan),getMonth(mendapatkan angka bulan)
        for (let i = 1; i <= creditDuration; i++) { //untuk memulai jangka waktu dan menghitung tanggal jatuh tempo setiap bulan
            const dueDate = currentDate.toLocaleDateString(); //variabel untuk menentukan format tanggal pengguna
            currentDate.setMonth(currentDate.getMonth() + 1); //
            credit.push('Due date month ' + i + ' : ' + dueDate); //menambahkan satu atau lebih elemen ke akhir array
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
        console.log('================== Purchase Details =================');
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
        console.log('================== Credit Details ===================');
        console.log('Credit terms : ' + creditDuration + ' months');
        // console.log(credit);
        // for (const dueCredit of credit) {
        //     console.log(dueCredit);
        // };
        credit.forEach(function (dueCredit) { // metode memanggil fungsi untuk setiap elemen dalam array 
            console.log(dueCredit); // untuk mengubah array menjadi string
        }
        );
        console.log('=====================================================');
        return; // mengakhiri fungsi
    };
}; 