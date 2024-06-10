/* arrow function   =>  */

function sum1(firstNumber, secondNumber) {
    return firstNumber + secondNumber
}

const sum = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber
}

const double = (input) => {
    return input * 2
}

const triple = () => {}

let result = sum(100, 50)
console.log({ result })
console.log(sum(100, 300))
console.log(sum(500, 300))

console.log("double of  100", double(100));
