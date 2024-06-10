/*
    array function 
        forEach
        find
        map
        filter
*/

let fruits = ["apple", "orange", "kiwi"]

/* 
    for (let index = 0; index < fruits.length; index++) {
        const element = fruits[index]
        console.log(element);
    }
    
*/

function printElement1(element) {
    console.log(element)
}

const printElement = (element) => {
    console.log(element)
}


const domSomething = () =>{}

fruits.forEach(printElement)

fruits.forEach((element) => {
    console.log("elmenet", element)
})

let users = [
    {
        name:"Ram",
        address:"xyz"
    },
    {
        name:"shyam",
        address:"abc"
    },
    {
        name:"hari",
        address:"ijk"
    },
]
