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



// const bookShelf = {
//   books: ["The Last Kingdom", "The Mist"],
//   getBooks() {
//     return this.books;
//   }
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist"]



// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName)
//     { this.potions.push(potionName);}
 
//     }

// const bookShelf = {
//   books: [
// 		{ title: "The Last Kingdom", rating: 8 },
// 		{ title: "The Mist", rating: 6 }
// 	],
// 	getBooks() {
// 		 this.books;
// 	}
// };

// function isEnoughCapacity(products, containerSize) {
// 	let total = 0;
// 		for (const prod of Object.values(products)) {
// 		total += prod;
// 	}
// 	return total <= containerSize;
// 	}




// console.log(
//   isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
// ); // false

// console.log(
//   isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
// ); // false


// function calcAverageCalories(days) {
// 	if(days.length === 0) {return 0}
// 	let total = 0;
// 	for (const day of days) {
// 		console.log(day);
// 		total = total + day.calories;
// 	}
// 	return Math.round(total / days.length);
	
// }



// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 }
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 }
//   ])
// ); // 2270

// console.log(
//   calcAverageCalories([])
// ); // 0


// const profile = {
// 	username: "Jacob",
// 	playTime: 300,

// 	changeUsername(newName) {this.username = newName; },


// 	updatePlayTime(hours) {this.playTime += hours; },



// 	getInfo() {return `${ this.username } has ${this.playTime} active hours! `},


// };



