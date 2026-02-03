


// const tututu = {
//     lalla: [
//         {
//             name: "Moore Hensley",
//             email: "moorehensley@indexia.com",
//             balance: 2811
//         },
//         {
//             name: "Sharlene Bush",
//             email: "sharlenebush@tubesys.com",
//             balance: 3821
//         },
//         {
//             name: "Ross Vazquez",
//             email: "rossvazquez@xinware.com",
//             balance: 3793
//         },
//         {
//             name: "Elma Head",
//             email: "elmahead@omatom.com",
//             balance: 2278
//         },
//         {
//             name: "Carey Barr",
//             email: "careybarr@nurali.com",
//             balance: 3951
//         },
//         {
//             name: "Blackburn Dotson",
//             email: "blackburndotson@furnigeer.com",
//             balance: 1498
//         },
//         {
//             name: "Sheree Anthony",
//             email: "shereeanthony@kog.com",
//             balance: 2764
//         },
//     ],

//     calcprays(lallaNev) {
//         const ret = this.lalla.find((item) => { return item.name === lallaNev })
//         if (!ret) { return `нихера нет етого имени!` } else {
//             return ret
//                { balance: ret.balance
//                  email: ret.email}
//         }
//     }
  
// }



// console.table(tututu.calcprays(`Sheree Anthony`));



// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


// class Storage  {
//     constructor(item) {
//         this.items = item;
//     }
//     getItems() {
//         return this.items;
// }
//     addItem(newItem) {
//         this.items.push(newItem);
// }

//     removeItem(itemToRemove) {
//        this.items = this.items.filter((items) => { return items !== itemToRemove });
//     }
    
// }




// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem("Scaner");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


class StringBuilder{
    constructor(initialValue){
        this.value = initialValue;
}
    getValue() {
        return this.value;
}
    padEnd(str) {
        this.value = this.value + str;
    }
    padStart(str) {
        this.value = str + this.value;
    }
    
    padBoth(str) {
        this.value = str + this.value + str;
    }
}


const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="






















