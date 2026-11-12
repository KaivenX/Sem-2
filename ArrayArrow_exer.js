const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', ratings: 5 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', ratings: 4.5 },
    { title: '1984', author: 'George Orwell', ratings: 4.7 },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', ratings: 4 },
    { title: 'Moby-Dick', author: 'Herman Melville', ratings: 3.5 },
];


//Q1
const bookRatings = books.filter(book => book.ratings > 4);
console.log(bookRatings)


//Q2
const bookTitles = books.map(book => book.title)
console.log(bookTitles)


//Q3
const targetBook = books.find(book => book.title === "1984");
console.log(targetBook);


//Q4
const sortedBooks = [...books].sort((a, b) => b.ratings - a.ratings);
console.log(sortedBooks);


//Q5
const highestRatedTitle = books
    .sort((a, b) => b.ratings - a.ratings)
    .map(book => book.title)[0]
console.log(highestRatedTitle)