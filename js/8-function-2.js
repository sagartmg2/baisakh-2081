let genders = ["Male", "Female", "Others"]
let religions = ["Hindu", "budhhist", "christian", "Muslim", "sikh"]
let provinces = ["one", "Two", "three", "four"]

console.log(genders.length)
console.log(religions.length)
console.log(provinces.length)

console.log(genders[0])
console.log(religions[0])

/* TODO: print random gender ,religion, provices from above array */

/* HINT */
Math.floor(Math.random() * genders.length)

console.log(Math.floor(123.234234)) // 123
console.log(Math.random() * 3) // alwasy prints between 0 1 and 2
