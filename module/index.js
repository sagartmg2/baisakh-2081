console.log("hello")

/* only works in browser 
    alert()
    document.getElementById()
*/
/* only works in node environment
    console.log(__filename)
    console.log(__dirname)
*/

/* global objects 
     console
     __filename
     __dirname
    setTimeout
    module
    require
*/

/* module 
    - core module
        - fs
        - path
        - http
    - third party 
    - local module
*/

const fs = require("fs")
const path = require("path")
const http = require("http")
const signup =  require("./auth")

// const createProduct = require("./product")
// const deleteProduct = require("./product")

const product = require("./product")

fs.writeFileSync("custom.txt", "hello")

let dbUsers = [
    { name: "Ram", email: "ram@gmail.com", password: 1234 },
    { name: "hari", email: "hari@gmail.com", password: 1234 },
    { name: "sita", email: "sita@gmail.com", password: 1234 },
]


signup("ram", "ram@gamil.com", "1234")


product.createProduct()
product.deleteProduct()
console.log(product.data)
// editProduct()