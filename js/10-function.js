let genders = ["Male", "Female", "Others"]
let religions = ["Hindu", "budhhist", "christian", "Muslim", "sikh"]
let provinces = ["one", "Two", "three", "four"]

function generateRandomValue(inputArray) {
  let randomIndex = Math.floor(Math.random() * inputArray.length)
  let output = inputArray[randomIndex]
  return output
}

let randomGenderValue = generateRandomValue(genders)
console.log({ randomGenderValue })

/* create random user; */
let users = []

/* 
    users.push({
        name: "ram",
        religion: generateRandomValue(religions),
        province: generateRandomValue(provinces),
        gender: generateRandomValue(genders),
    })

    users.push({
        name: "hari",
        religion: generateRandomValue(religions),
        province: generateRandomValue(provinces),
        gender: generateRandomValue(genders),
    })

    users.push({
        name: "shyam",
        religion: generateRandomValue(religions),
        province: generateRandomValue(provinces),
        gender: generateRandomValue(genders),
    }) 
*/

function signup(name) {
  users.push({
    name: name,
    religion: generateRandomValue(religions),
    province: generateRandomValue(provinces),
    gender: generateRandomValue(genders),
  })
}

signup("ram")
signup("hari")
signup("shyam")
signup("abc")
signup("ijk")
signup("xyz")
signup("sita")
signup("gita")

let names = ["ram", "hari", "shyam", "abc", "ijk", "xyz", "sita", "gita"]

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
