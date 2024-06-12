let numbers = [1, 2, 3, 4, 5]
let doubleNumbers = []

numbers.forEach((number) => {
    doubleNumbers.push(number * 2)
})

let oddNumbers = numbers.filter((number) => {
    if (number % 2 !== 0) {
        return true
    }
})

let evenNumbers = numbers.filter((number) => number % 2 == 0)
console.log({ evenNumbers })

let tripleNumbers = numbers.map((number) => {
    return number * 3
})

console.log(tripleNumbers)

const sum1 = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber
}

const sum = (firstNumber, secondNumber) => firstNumber + secondNumber

console.log(sum(10, 20))
console.log(sum(30, 40))

const quadraple1 = (number) => {
    return number * 4
}

const quadraple = (number) => number * 4

console.log(quadraple(4))
console.log(quadraple(10))

let names = ["ram", "hari", "shyam", "gita"]
let users = []

names.forEach((name, index) => {
    users.push({
        name: name,
        email: `${name}@gmail.com`,
        password: `${name}${index}`,
    })
})

console.log(users)

let fakeUsers = names.map((name, index) => {
    return {
        name,
        email: `${name}@gmail.com`,
        password: `${name}${index}`,
    }
})

// console.log(fakeUsers)

/* asynchronous task */

// setTimeout(() => {
//     console.log("do somehting")
// }, 3000)

try {
    let b = 2
    let c = 3
    let a = b + c
    console.log({ a })
} catch (err) {
    console.log("err", err)
    console.log("err", err.message)
}

/* 
    - pending
    - resolve
    - reject    
*/

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("products data received")
        reject("server error")
    }, 2000)
})

console.log(promise)

promise
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log("error", err)
    })

console.log("after promise")

// .find()
