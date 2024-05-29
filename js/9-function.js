let genders = ["Male", "Female", "Others"]
let religions = ["Hindu", "budhhist", "christian", "Muslim", "sikh"]
let provinces = ["one", "Two", "three", "four"]

/* 
    let randomGenderIndex = Math.floor(Math.random() * genders.length)
    console.log(genders[randomGenderIndex])

    let randomReligionIndex = Math.floor(Math.random() * religions.length)
    console.log(religions[randomReligionIndex])

    let randomProvinceIndex = Math.floor(Math.random() * provinces.length)
    console.log(provinces[randomProvinceIndex]) 
*/

function generateRandomValue(inputArray) {
  let randomIndex = Math.floor(Math.random() * inputArray.length)
  console.log(inputArray[randomIndex])
}

generateRandomValue(genders)
generateRandomValue(religions)
generateRandomValue(provinces)

let datatype = typeof ([])
console.log(datatype)

