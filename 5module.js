                                                    // callback


// function ret(array, callback) {
//     const newArray = [];
//     for (const item of array) {
//         newArray.push(callback(item))
//     }
//     return newArray;
//  };

// console.log( ret([45, 45, 88, 23], function (value) {
//    return value * 2;
// }
// ));

                                                   /////////////////////////////
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName,callback) {
//   return callback(pizzaName);
// }
                                              //////////////////////////////////////////////
                                          

// function filterArray(numbers, value) {
//   const filters = [];
// numbers.forEach(function(number, index) {
//  if (number > value) { filters.push(number);}
// });
//   return filters ;
// }

// console.log(filterArray([5, , 6, 7, 8, 9], 6));



// function tutu(a, b, callback) {
//     return callback(a, b)
    
// }

// console.log(tutu(8, 7, (a, b) =>  a * b ));
 

// const ret = (array, callback) => {
//    const tututu = []
//     for(item of array) {
//         tututu.push(callback(item))
//     }
//     return tututu;
// }

// console.log(ret([75, 90, 43, 85, 33],value =>  value * 30
// ));


// const arrey = [78, 76, 54, 43, 56, 90, 1000];

// let sum = 0;

// arrey.forEach((number) => {
//    sum = sum + number
    
// });

// console.log(sum);
                                // Метод split -перетворюе рядок в масив (',') та розділяе комою


// const grupp = (obj) => {
//     const retynems = obj.nems.split(`,`)
//    const wertell = obj.tell.split(`,`)
    
//     retynems.forEach((neums, index) => {
//         console.log(`${neums} - ${wertell[index]}`);
        
//     });
// }
// grupp({
//         nems: `Rita, Tonz, Roma, Koly`,
//         tell:`067745741, 09745765, 09971222, 0983467784`,
//     })


// const tututu = [
//     { mace: `Kia`, model: `sporteg`, price: 20000 },
//     { mace: `Lexys`, model: `top`, price: 80000 },
//     { mace: `Deo`, model: `lanos`, price: 1000 },
// ];


// const retCars = (car) => {
//     const fer = car.map((cars) => {
//        return cars.mace;
//     });
//     return fer;
//  };



// console.log(retCars(tututu));
