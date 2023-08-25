const books = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", pages: 234 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281 },
    { title: "1984", author: "George Orwell", pages: 328 },
    { title: "Pride and Prejudice", author: "Jane Austen", pages: 432 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180 },
  ];
  
  // Filter books with more than 200 pages
  const longBooks = books.filter((book) => book.pages > 200);
  
  // Map book titles
  const bookTitles = books.map((book) => book.title);
  
  // Calculate total pages using reduce
  const totalPages = books.reduce((total, book) => total + book.pages, 0);
  
  console.log("All Books:", books);
  console.log("Long Books (more than 200 pages):", longBooks);
  console.log("Book Titles:", bookTitles);
  console.log("Total Pages:", totalPages);
  