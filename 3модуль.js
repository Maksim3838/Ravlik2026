// function getLastElementMeta(array) {
//     const ryt = array.length - 1;
    
//   const ryj = array[ryt]
// return[ryt, ryj]
// }
// getLastElementMeta(["apple", "peach", "pear", "banana"])

// const a = [5];
// const b = a;
// console.log(a);
// console.log(b);

// a[0]= 10;
// console.log(a);
// console.log(b);


// function calculateEngravingPrice(message, pricePerWord) {
//     const words = message.split(" ");
//     console.log(words.length*pricePerWord);
// }


// calculateEngravingPrice("JavaScript is in my blood", 10); // 50
// calculateEngravingPrice("JavaScript is in my blood", 20); // 100
// calculateEngravingPrice("Web-development is creative work", 40); // 160
// calculateEngravingPrice("Web-development is creative work", 20); // 80

// const planets = ["Earth", "Mars", "Venus"];
// for (let i = 0; i < planets.length; i += 1){
//     console.log(planets[i])
// }


// const tytyty = [1, 2, 3, 4, 5, 6];
// const lalala = [1, 5];

// function trrys(tytyty, lalala) {
//     const zbn = [];
//     for (const element of tytyty) {
//         if (lalala.includes(element)) {
//             zbn.push(element);
//         }
//         console.log(zbn);
//     };
//     return zbn;
// }

// trrys(tytyty, lalala);

// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// sum(2, 5);

                                            // 1111111111111111111111111111111111111
// function slugify(title) {
//     return title.toLowerCase().split(` `).join(`-`)
// }
// console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

                                                //    2222222222222222222222222
                                            

// function makeArray(firstArray, secondArray, maxLength) {
//     const nevArray = firstArray.concat(secondArray);
//     if (nevArray.Length > maxLength) { return nevArray.slice(0, maxLength) }
//     return nevArray;
// }


// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []




// function filterArray(numbers, value) {
//     let nevdd = [];
//     for (const numb of numbers) { if (numb > value) { nevdd.push(numb); } } 
//     return nevdd;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]


