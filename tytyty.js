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



function formatMessage(message, maxLength) {
    if (message.length <= maxLength) {
        return message;
    }else
    { return message.slice(0, maxLength) + "..."; }
};
 

 console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"
