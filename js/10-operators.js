/*
 arthematic operstors
     + - / * %


assignment opertors
    = 

    
comparion operators
   ==
   >
   <   

logical Operators
    - AND
    - OR
    - NOT

*/

let services = ["one", "second", "thrid"]

console.log(0 % 2) // 0  // right
console.log(1 % 2) // 1  // left
console.log(2 % 2) // 0
console.log(3 % 2) // 1

let count = 0
count = count + 10
count += 10

count++
++count

let price = 1000
console.log(price++)
console.log(price)

function double(input) {
  let output = input * 2
  return output
}

let input = 99
console.log(double(++input))

let user1 = "Ram"
let user2 = "ram"
console.log(user1 == user2)

let product1 = {
  name: "mouse",
  price: 1000,
}
let product2 = {
  name: "keybord",
  price: 1000,
}
console.log(product1.price == product2.price)

console.log(services.length >= 3)
console.log(3 <= 3)


console.log(1 == "1");
console.log(1 + 1);
console.log("1" + "1");


/* typecast */
console.log(1 + "1"); // string
console.log("adsf" - "ad"); // NaN
console.log("adsf" * "ad"); // NaN
console.log(1 - "1"); // number


/* 
    research 
    
    arrow function 
    =>

    if else
    nested if else 
    switch
    ternary operator
*/
