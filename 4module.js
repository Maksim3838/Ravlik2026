// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key); // Ключ
//   console.log(book[key]);  // Значення властивості з таким ключем
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for(const key in apartment){
//   keys.push(key);
//   values.push(apartment[key]);
//   console.log(key);
//   console.log(apartment[key]);
  
// }
// const key = Object.keys(apartment);
// console.log(key);

// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell" },
//   { title: "Beside Still Waters", author: "Robert Sheckley" },
//   { title: "The Tell-Tale Heart", author: "Edgar Allan Poe" }
// ];

// const titles = [];
// const authors = [];
// for (nevval of books) {
//     titles.push(nevval.title)
//     authors.push(nevval.author)
// }

// const authorToSearchFor = "Robert Sheckley";

// for (const book of books) {
// 	if(book.author === authorToSearchFor) {
// 		console.log(book);
// 		console.log(book.title)
// 		console.log(book.author)
// 	}
// }


// const bookss = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell" },
//   { title: "Beside Still Waters", author: "Robert Sheckley" },
//   { title: "The Tell-Tale Heart", author: "Edgar Allan Poe" }
// ];

// const authorToSearchFor = "Robert Sheckley";

// for (const book of bookss) {
// 	if(book.author === authorToSearchFor) {
// 		console.log(book);
// 		console.log(book.title)
// 		console.log(book.author)
// 	}
// }


// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

// for( const product of products){
//   if(product.name === productName){
//     return product.price * product.quantity;
//   }

//   }
  
// return `Product ${productName} not found!`;
// }
