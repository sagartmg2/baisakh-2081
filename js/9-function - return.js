let genders = ["Male", "Female", "Others"]
let religions = ["Hindu", "budhhist", "christian", "Muslim", "sikh"]
let provinces = ["one", "Two", "three", "four"]

function generateRandomValue(inputArray) {
  let randomIndex = Math.floor(Math.random() * inputArray.length)
  let output = inputArray[randomIndex]
  return output
}

let datatype = typeof {}
console.log(datatype)

let randomGenderValue = generateRandomValue(genders)
console.log({ randomGenderValue })

let randomReligionValue = generateRandomValue(religions)
console.log({ randomReligionValue })

console.log(generateRandomValue(provinces))

function sum(firstInput, secondInput) {
  let output = firstInput + secondInput
  return output
}

function double(input) {
  let output = input * 2
  return output
}

let output = sum(50, 50)
console.log({ output })

console.log(double(output))

console.log(double(sum(50, 50)))

/* create random users having random background   */

let fruits = ["apple", "orange"]
fruits.push("banana")
fruits.push("kiwi")

console.log(fruits)

/* create random user; */
let users = [ ]
signup("ram")
signup("hari")
signup("shyam") 

/* output:
  users = [
    {
      name:"ram",province,gender,religion
    },
    {
      name:"hari,province,gender,religion
    },
    {
      name:"shyam,province,gender,religion
    }
  ]

*/
console.log(users) 
