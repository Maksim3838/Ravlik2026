// function findNumber(max, target) {
// 		for (let i = 1; i <= max; i += 1) {
// 	    		    if (i === target) {
// 	     				return i;
// 	    }
// 	  }
//   }

// const result = findNumber(10, 6);
// console.log(`Result of function execution ${result}`);
                                                        




                                                                    //    \\\\\\\\\
                                               // первое правдивое !!!!!

// console .log(3 || 7);
// console .log(`` || 7);
//  console .log(3 || 0);
// console .log(3 || 7 || 0);
// console .log(NaN || 0 || undefined); undefined


// console .log(3 && 7);
// console .log(`` && 7);
// console .log(3 && 0);             последнее правдивое или если не правдивое виводит неправдивое.
// console .log(3 && 7 && 0);

                                                              //    \\\\\\\\\\\\

//  function makeTransaction(quantity, pricePerDroid, customerCredits){
// const totalPrice = quantity * pricePerDroid ;
// if (totalPrice <= customerCredits)
// 	 {return `You ordered ${quantity} droids worth ${totalPrice} credits!`}
// else {return "Insufficient funds!"}
//  };



//  console.log(makeTransaction(5, 50, 250 ));



// function formatMessage(message, maxLength) {
//     console.log(message.length);
//     if (message.length <= maxLength) {
//         return message;
//     }else
//     { return message.slice(0, maxLength) + "..."; }
// };
 

//  console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"



                                    //  includes - перевірка чи е таке слово в реченні.

// function checkForSpam(message) {
//     const messpam = message.toLowerCase();
//     return messpam.includes(`spam`) || messpam.includes(`sale`);
// }

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
