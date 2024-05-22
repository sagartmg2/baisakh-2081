/* 
     Array
        - collection of similar elements having saame data types
        - index
            always starts with 0
        

    - string
    - number
    - boolean
    - undefined
    - null

    - Array
    - Object


*/

/*


let user1 = "ram"
let user2 = "hari"
let user3 = "shyam"

*/

let users = ["ram", "hari", "shyam"]
users[3]  = "sita"
users[4]  = "gita"

console.log(users);



// let evenNumbers = [2,4,6,8,"ten"]; // wrong
let evenNumbers = [2, 4, 6, 8, 10]

let oddNumbers = [1, 3, 5, "seven", 9] //  change this to : [1,2,5,7,9]

console.log(oddNumbers[3])

oddNumbers[3] = 7

console.log(oddNumbers)

let userName = "ram"
let userAge = 10
let userPhone = 9823423656
let userGender = "M"
let userAddress = "boudha"

/* let user = [
  ["name", "age", "phone", "gender", "address"],
  ["Ram", 10, 2342134, "M", "boudha"],
] */

let user = {
    name: "ram",
    age:10,
    phone:234234,
    gender:'M'
}



let user2Name = "hari"
let user2Age = 20
let user2Phone = 987823423656
let user2Gender = "M"
let user2Address = "putalisadk"


let user2 = {
    name: "hari",
    age:20,
    phone:987234234,
    gender:'M'
}

/* 

let usersData = [
  ["ram", "shyam", "hari"],
  [16, 17, 18],
  ["m", "m", "m"],
  ["9999999999", "9999999998", "9999999997"],
] */

/* Object
    same like our real life objects having some proerties and respective values
    eg: projector , mouse keybord


    let <objectName> = {
        <key> : <value>,
        <key> : <value>,
        <key or property or attribute> : <value>,

    }

*/

/* 

let projectorBrand = "sony"
let projectorColor = "white"
let projectorPrice = 10000 

*/

let projector = {
    price: 10, // convert 10 to 10000
    color: "white",
    brand : "sony"
}


/* 

    let console = {
        log : function(){
            
        }
    }
*/

console.log(projector);
console.log(projector.price);
console.log(projector.color);
console.log(projector.brand);
/* code here to change projector price from 10 to 10000 */
projector.price = 10000
projector.dimension = "10 X 10 X 10"
console.log(projector);


